// src/extension.ts
import * as vscode from 'vscode';
import fetch from 'node-fetch';

export function activate(context: vscode.ExtensionContext) {
  console.log("🔥 CodeLixer activated");

  let isCorrecting = false;
  let debounceTimer: NodeJS.Timeout | null = null;

  // Register test command
  const commandDisposable = vscode.commands.registerCommand('codelixer.correct', () => {
    vscode.window.showInformationMessage('🚀 CodeLixer is active and ready!');
    console.log("✅ CodeLixer command executed");
  });
  context.subscriptions.push(commandDisposable);

  // Listen for text changes
  const changeDisposable = vscode.workspace.onDidChangeTextDocument((event) => {
    if (isCorrecting) {
      return;
    }

    const editor = vscode.window.activeTextEditor;
    if (!editor || event.document !== editor.document) {
      return;
    }

    const lastChange = event.contentChanges[event.contentChanges.length - 1];
    if (!lastChange || lastChange.text.trim() === '') {
      return;
    }

    // Debounce: wait 400ms after last change
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(async () => {
      const fullLine = editor.document.lineAt(lastChange.range.start.line).text;

      try {
        const response = await fetch('https://codelixer-backend.onrender.com/fix', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: fullLine }),
        });

        const data = await response.json();
        const fullResponse = data.response?.trim();
        if (!fullResponse) {
          return;
        }

        isCorrecting = true;

        const edit = new vscode.WorkspaceEdit();
        const lineRange = editor.document.lineAt(lastChange.range.start.line).range;

        // Replace the full line with the corrected content (multi-line safe)
        const fixedLines = fullResponse.split('\n');
        await editor.edit((builder) => {
          builder.replace(lineRange, fixedLines.join('\n'));
        });

        console.log("🔧 CodeLixer autocorrected line successfully");
      } catch (error) {
        console.error('❌ Correction error:', error);
      } finally {
        isCorrecting = false;
      }
    }, 400); // 400ms debounce
  });

  context.subscriptions.push(changeDisposable);
}

export function deactivate() {
  console.log("🛑 CodeLixer deactivated");
}

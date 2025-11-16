import fetch from 'node-fetch';

export async function getCorrection(input: string): Promise<string | null> {
  const prompt = `Fix any typo or syntax error in this code:\n\n${input}\n\nCorrected:`;

  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt,
      max_tokens: 60,
      temperature: 0.2
    })
  });

  const data = await response.json();
  return data?.choices?.[0]?.text?.trim() || null;
}

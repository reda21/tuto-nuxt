export async function fetchChatCompletions(url: string, data: any) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(`HTTP error! status: ${response.status}, details: ${JSON.stringify(errorDetails)}`);
  }

  const result = await response.json();
  return result;
}

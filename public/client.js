document.getElementById('owoifyForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const inputText = document.getElementById('inputText').value;
    const option = document.getElementById('option').value;

    try {
      const response = await fetch('/owoify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputText, option })
      });

      if (!response.ok) {
        throw new Error('Failed to owoify text');
      }

      const data = await response.json();
      document.getElementById('result').innerText = data.owoifiedText;
    } catch (error) {
      console.error(error);
      // Handle error display or logging
    }
  });
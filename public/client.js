document.getElementById('owoifyForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const inputText = document.getElementById('inputText').value;
  const option = document.getElementById('option').value;

  try {
    const owoifyResponse = await fetch('/owoify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ inputText, option })
    });

    if (!owoifyResponse.ok) {
      throw new Error('Failed to owoify text');
    }

    const owoifyData = await owoifyResponse.json();
    document.getElementById('result').innerText = owoifyData.owoifiedText;


    const catImageResponse = await fetch('/randomcat');
    
    if (!catImageResponse.ok) {
      throw new Error('Failed to fetch random cat image');
    }

    const catImageData = await catImageResponse.json();
    const catImageURL = catImageData.catImageURL;

    const resultDiv = document.getElementById('result');
    resultDiv.style.backgroundImage = `url('${catImageURL}')`;
    resultDiv.style.display = 'block'; 

    document.getElementById('catImage').style.display = 'none';
  } catch (error) {
    console.error(error);
  }
});

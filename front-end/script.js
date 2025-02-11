async function fetchShoes() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/shoes/');
        
        if (!response.ok) {
            throw new Error(`Erro ao buscar os dados: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Dados recebidos:', data); 

        const shoesList = document.getElementById('shoes-list');
        shoesList.innerHTML = ''; 

      
        if (data.length === 0) {
            shoesList.innerHTML = '<p>Nenhum tênis encontrado.</p>';
            return;
        }

        
        data.forEach(shoe => {
            const shoeDiv = document.createElement('div');
            shoeDiv.classList.add('shoe');
            shoeDiv.innerHTML = `
                <h3>${shoe.name}</h3>
                <p><strong>Descrição:</strong> ${shoe.description}</p>
                <p><strong>Preço:</strong> R$ ${shoe.price}</p>
            `;
            shoesList.appendChild(shoeDiv);
        });
    } catch (error) {
        
        console.error('Erro ao buscar os dados:', error);
    }
}


window.onload = fetchShoes;

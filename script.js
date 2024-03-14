const rightSide = document.querySelector('#rightSide')
let valorteste = [];

function addBtn() {
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('formItem').style.display = 'block';
}

function cancelBtn() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('overlayDetails').style.display = 'none';

}

function submitBtn() {
    const titleInput = document.querySelector('#inputTitle')
    const dateInput = document.querySelector('#inputDate')
    const descriptionInput = document.querySelector('#inputDescription')

    dateValue = dateInput.value
    titleValue = titleInput.value
    descriptionValue = descriptionInput.value

    listName = new doList(titleValue, dateValue, descriptionValue)

    
    
}

function doList(titleValue, dateValue, descriptionValue) {
    this.titleValue = titleValue;
    this.dateValue = dateValue;
    this.descriptionValue = descriptionValue;
    //alert('Titulo: ' + titleValue + '\nData: ' + dateValue + '\nDescrição: ' + descriptionValue)

    addList();
    document.getElementById('overlay').style.display = 'none';    
       
    document.querySelector('#titleDetails').textContent = titleValue
    document.querySelector('#dateDetails').textContent = dateValue;
    document.querySelector('#descriptionDetails').textContent = descriptionValue;    

    
    /*
    function createItems(){
    const infoDetails = document.createElement('div');
    infoDetails.classList.add('div');
    document.getElementById('centralizadaDetails').appendChild(infoDetails)
    
    const h1divteste = document.createElement('h1');
    h1divteste.classList.add('h1');
    infoDetails.appendChild(h1divteste);
    h1divteste.textContent = titleValue
    
    const h2divteste = document.createElement('h1');
    h2divteste.classList.add('h1');
    infoDetails.appendChild(h2divteste);
    h2divteste.textContent = dateValue

    const h3divteste = document.createElement('h1');
    h3divteste.classList.add('h1');
    infoDetails.appendChild(h3divteste);
    h3divteste.textContent = descriptionValue
    }
    */

 
}

function addList() {
    const painelItem = document.createElement('div');
    painelItem.classList.add('item');
    rightSide.appendChild(painelItem);

    const painelCheckbox = document.createElement('input');
    painelCheckbox.type = 'checkbox';
    painelCheckbox.classList.add('checkbox');
    painelItem.appendChild(painelCheckbox);

    const painelTitle = document.createElement('p');
    painelTitle.classList.add('p');
    painelItem.appendChild(painelTitle);
    painelTitle.textContent = titleValue;

    const painelDate = document.createElement('p');
    painelDate.classList.add('p');
    painelItem.appendChild(painelDate);
    painelDate.textContent = dateValue;

    const painelDetails = document.createElement('button');
    painelDetails.classList.add('itemDetails');
    painelItem.appendChild(painelDetails);
    painelDetails.textContent = 'Details'

    const painelImg1 = document.createElement('button');
    painelImg1.classList.add('itemBtn');
    painelItem.appendChild(painelImg1);
    painelImg1.innerHTML = "<img src='edit.png' width='24px' height='24px'>";

    const painelImg2 = document.createElement('button');
    painelImg2.classList.add('itemBtn');
    painelItem.appendChild(painelImg2);
    painelImg2.innerHTML = "<img src='trash.png' alt='Delete' width='24px' height='24px'>";

    painelDetails.addEventListener('click', () => {
        document.getElementById('overlayDetails').style.display = 'flex';
        document.getElementById('formItemDetails').style.display = 'none';

        detailsBtn();
        
        /*
        const h1Test = document.createElement('h1');
        h1Test.classList.add('h1Test');
        document.getElementById('centralizadaDetails').appendChild(h1Test)
        h1Test.textContent = 'Title'
        */

    })

    painelImg2.addEventListener('click', () => {
        painelItem.remove();
    })

    function detailsBtn() {
        document.getElementById('overlayDetails').style.display = 'flex';
        document.getElementById('formItemDetails').style.display = 'block';
    
        document.getElementById('titleDetails').textContent = this.titleValue;
        document.getElementById('dateDetails').textContent = this.dateValue;
        document.getElementById('descriptionDetails').textContent = this.descriptionValue;
        
        alert('Titulo: ' + titleValue + '\nData: ' + dateValue + '\nDescrição: ' + descriptionValue)
    
    
    
        /*
        const h1Test = document.createElement('h1');
        h1Test.classList.add('h1Test');
        document.getElementById('centralizadaDetails').appendChild(h1Test)
        h1Test.textContent = 'Title'
    
        const h2Test = document.createElement('h2');
        h2Test.classList.add('h2Test');
        document.getElementById('centralizadaDetails').appendChild(h2Test)
        h2Test.textContent = 'Title1'
        */
    
    
    }



}



function deleteBtn() {
    document.getElementById('item').remove();
}
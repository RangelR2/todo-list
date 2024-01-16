const rightSide = document.querySelector('#rightSide')

function addBtn(){
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('formItem').style.display = 'block';
}

function cancelBtn(){
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('overlayDetails').style.display = 'none';
    
}

function submitBtn(){
    const titleInput = document.querySelector('#inputTitle')
    const dateInput = document.querySelector('#inputDate')
    const descriptionInput = document.querySelector('#inputDescription')

    titleValue = titleInput.value
    dateValue = dateInput.value
    descriptionValue = descriptionInput.value

    listName = new doList(titleValue, dateValue, descriptionValue)
}

function doList(titleValue,dateValue,descriptionValue){
    this.titleValue = titleValue;
    this.dateValue = dateValue;
    this.descriptionValue = descriptionValue;
    
    addList();
    document.getElementById('overlay').style.display = 'none';
}

function addList(){
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

    const painelDetais = document.createElement('button');
    painelDetais.classList.add('itemDetails');
    painelItem.appendChild(painelDetais);
    painelDetais.textContent = 'Details'

    const painelImg1 = document.createElement('button');
    painelImg1.classList.add('itemBtn');
    painelItem.appendChild(painelImg1);
    painelImg1.innerHTML = "<img src='edit.png' width='24px' height='24px'>";
    
    const painelImg2 = document.createElement('button');
    painelImg2.classList.add('itemBtn');
    painelItem.appendChild(painelImg2);
    painelImg2.innerHTML = "<img src='trash.png' alt='Delete' width='24px' height='24px'>";

    painelDetais.addEventListener('click', () => {
        document.getElementById('overlayDetails').style.display = 'flex';
        document.getElementById('formItemDetails').style.display = 'block';

        
    })

    painelImg2.addEventListener('click', () => {
        painelItem.remove();
    })

    

}

function detailsBtn(){
    document.getElementById('overlayDetails').style.display = 'flex';
    document.getElementById('formItemDetails').style.display = 'block';

}

function deleteBtn(){
    document.getElementById('item').remove();
}
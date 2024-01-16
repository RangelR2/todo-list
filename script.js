class list {
    constructor(){
        this.checklist
        this.title
        this.dueDate
        this.description
        this.priority
    }
}

function addBtn(){
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('formItem').style.display = 'block';
}

function cancelBtn(){
    document.getElementById('overlay').style.display = 'none';
    
}
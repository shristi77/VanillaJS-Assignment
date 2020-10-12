const students = [
    { rollno: '1', name: 'M.S. Dhoni', emailId: 'dhoni@gmail.com' },
    { rollno: '2', name: 'Virat kolhi', emailId: 'dhoni@gmail.com' },
    { rollno: '3', name: 'Sachin tendulkar', emailId: 'dhoni@gmail.com' },
    { rollno: '4', name: 'Ram verma', emailId: 'dhoni@gmail.com' },
    { rollno: '5', name: 'Shyam sharma', emailId: 'dhoni@gmail.com' },
    { rollno: '6', name: 'Sita chaudhary', emailId: 'dhoni@gmail.com' },
    { rollno: '7', name: 'Geeta Dhoni', emailId: 'dhoni@gmail.com' },
    { rollno: '8', name: 'Meeta Dhoni', emailId: 'dhoni@gmail.com' },
    { rollno: '9', name: 'Max Verma', emailId: 'dhoni@gmail.com' },
    { rollno: '10', name: 'Manu Sharma', emailId: 'dhoni@gmail.com' },
    { rollno: '11', name: 'M.S. Dhoni', emailId: 'dhoni@gmail.com' },
    { rollno: '12', name: 'Virat kolhi', emailId: 'dhoni@gmail.com' },
    { rollno: '13', name: 'Sachin tendulkar', emailId: 'dhoni@gmail.com' },
    { rollno: '14', name: 'Ram verma', emailId: 'dhoni@gmail.com' },
    { rollno: '15', name: 'Shyam sharma', emailId: 'dhoni@gmail.com' },
    { rollno: '16', name: 'Sita chaudhary', emailId: 'dhoni@gmail.com' },
    { rollno: '17', name: 'Geeta Dhoni', emailId: 'dhoni@gmail.com' },
    { rollno: '18', name: 'Meeta Dhoni', emailId: 'dhoni@gmail.com' },
    { rollno: '19', name: 'Max Verma', emailId: 'dhoni@gmail.com' },
    { rollno: '20', name: 'Manu Sharma', emailId: 'dhoni@gmail.com' },
    { rollno: '21', name: 'M.S. Dhoni', emailId: 'dhoni@gmail.com' },
    { rollno: '22', name: 'Virat kolhi', emailId: 'dhoni@gmail.com' },
    { rollno: '23', name: 'Sachin tendulkar', emailId: 'dhoni@gmail.com' },
    { rollno: '24', name: 'Ram verma', emailId: 'dhoni@gmail.com' },
    { rollno: '25', name: 'Shyam sharma', emailId: 'dhoni@gmail.com' },
    { rollno: '26', name: 'Sita chaudhary', emailId: 'dhoni@gmail.com' },
    { rollno: '27', name: 'Geeta Dhoni', emailId: 'dhoni@gmail.com' },
    { rollno: '28', name: 'Meeta Dhoni', emailId: 'dhoni@gmail.com' },
    { rollno: '29', name: 'Max Verma', emailId: 'dhoni@gmail.com' },
    { rollno: '30', name: 'Manu Sharma', emailId: 'dhoni@gmail.com' }
];

const first = document.getElementById('first');
const last = document.getElementById('last');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const dropDown = document.getElementById('dropdown');

const page = document.getElementById('pageNo');

const List = function (element, listItems) {
    this.pageSize = 10; //rows
    this.currentPage = 1;
    this.render = function () {

        $(element).html('');
        page.innerText= this.currentPage;
        let start = this.pageSize * (this.currentPage - 1);
        console.log("pageSize = "+ this.pageSize);
        console.log("currentPage = "+ this.currentPage);
        console.log("start = " + start)
        let end = this.pageSize + start;
        console.log("end =" + end)
        let paginatedItems = listItems.slice(start, end);
        console.log(paginatedItems.length)

        for (let i = 0; i < paginatedItems.length; i++) {
            let item = paginatedItems[i];

            let itemRow = document.createElement('tr');
            let itemRollNo = document.createElement('td');
            itemRollNo.className = 'itemRollNo';
            itemRollNo.innerText = item.rollno;
            let itemName = document.createElement('td');
            itemName.className = 'itemName';
            itemName.innerText = item.name;
            let itemEmailId = document.createElement('td');
            itemEmailId.className = 'itemEmailId';
            itemEmailId.innerText = item.emailId;

            itemRow.appendChild(itemRollNo);
            itemRow.appendChild(itemName);
            itemRow.appendChild(itemEmailId);

            element.appendChild(itemRow);

        }
    };
    first.addEventListener("click", () => {
        this.currentPage = 1;
        this.render();
    });
    last.addEventListener("click", () => {
        this.currentPage = Math.ceil(listItems.length / this.pageSize);
        this.render();
    });
    prev.addEventListener("click", () => {
        this.currentPage == 1 ? this.currentPage = Math.ceil(listItems.length / this.pageSize) : this.currentPage--;
        this.render();
    });
    next.addEventListener("click", () => {
        this.currentPage == Math.ceil(listItems.length / this.pageSize) ? this.currentPage = 1 : this.currentPage++;
        this.render();
    });

    dropDown.addEventListener("change" ,() => {
        this.pageSize = dropDown.value;
        console.log("DropDown start");
        this.render();
    });
};

const listObj = new List(document.getElementById('body'), students);
listObj.render();

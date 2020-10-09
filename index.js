
const List = function(element, listItems){
	this.pageSize = 10;
	this.currentPage = 1;
	this.render = function(){
	     $(element).html('');
        for (let i = 1; i <= listItems.length; i++) {
            if(listItems.rollno === element){
                obj=listItems[i-1];
                $(rollno).html(obj.rollno);
                $(name).html(obj.name);
                $(emailId).html(obj.emailId);
                this.currentPage = obj.rollno;
                break;
            }
        }
	};
	this.navigateFirst = function(){
        this.currentPage=1;
        document.getElementById("currentRoll").value = this.currentPage;
        this.render();
    };
	this.navigateLast = function(){
        this.currentPage=10;
        document.getElementById("currentRoll").value = this.currentPage;
        this.render();
    };
	this.navigatePrev = function(){
        this.currentPage=this.currentPage-1;
        document.getElementById("currentRoll").value = this.currentPage;
        this.render();
    };
	this.navigateNext = function(){
        this.currentPage= this.currentPage+1;
        document.getElementById("currentRoll").value = this.currentPage;
        this.render();
    };
};

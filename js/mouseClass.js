class mouseClass{
    constructor(elementID){
        this.item = [];
        this.aspectRatio = 1;
        this.elementID = elementID;
        this.onWindowResize();
        //Detectores de eventos
        window.addEventListener('resize', this.onWindowResize.bind(this));
        document.addEventListener('mouseup', this.onMouseUp.bind(this));
        document.addEventListener('mousedown', this.onMouseDown.bind(this));
        document.addEventListener('mousemove',this.onMouseMove.bind(this));
    }
    getKeys(){
        return this.item
    }
    key(button){
        return (this.item.indexOf(button)> -1);
    }
    click(button){
        var i = this.item.indexOf(button);
        if(i>-1)this.item.splice(i,1);
        return(i>-1);
    }
    hover(obj){
        var x = this.item['MouseX']*this.aspectRatio;
        var y = this.item['MouseY']*this.aspectRatio;
        var onHover = (
            x > obj.x && 
            x < obj.x + obj.width && 
            y > obj.y &&
            y < obj.y + obj.height);
        if (onHover) document.body.style.cursor = "Pointer";
        return onHover;
    }
    onWindowResize(){
        this.aspectRatio = document.getElementById(this.elementID);
        this.aspectRatio = this.aspectRatio.width/this.aspectRatio.clientRatio.clientWidth;
    }
    onMouseDown(event){
        if(this.item.indexOf(event.button)<0){
            this.item.push(event.button);
        }
    }
    onMouseUp(event){
        var i = this.item.indexOf(event.button);
        if(i>-1){
            this.item.splice(i,1);
        }
    }
    onMouseMove(event){
        this.item['MouseX']=event.offsetX;
        this.item['MouseY']=event.offsetY;
    }
}
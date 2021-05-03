import Button from '@material-ui/core/Button';

const changeText=(event)=>{
    console.log(event.target)
    event.target.innerText = event.target.innerText + " click!!"
  }

const MultiButton=(num)=>{
    var output=[];
    for(let i=1;i<num+1;++i)
    output.push(<Button variant="contained" color="primary"
    onClick={changeText}>the {i} button</Button>)
    return output;
}

export default MultiButton;
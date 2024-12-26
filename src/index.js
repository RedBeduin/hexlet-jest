//export default str => str.split('').reverse().join('');
export default function reverse(str) { 
    let splitstr = str.split('');
    if(splitstr.length > 1) 
    { 
       for(let i = 1; i < splitstr.length; i++)
       {
        splitstr[i] = splitstr[i] + '|';
       } 
    }  
    splitstr = splitstr.reverse().join('');  
    return splitstr; 
};

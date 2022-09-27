
const inputNumber = (number) => {
    //document.getElementById.value += number;
    document.getElementById("result").value += number;
}

const clean = () => {
    //document.getElementById.value += number;
    document.getElementById("result").value = "";
}

const oldhistory = () => {
    console.log(list);
    //alert(list[0]);
    var temp = "";
    for(var index=0; index < list.length; index++ )
    {
        temp += list[index].statement;
        temp += " = " + list[index].resul;
        temp += "\n";
    }
    document.getElementById("his").value = temp;
}

var list = [];

const equalFunction = () => {
    var state = document.getElementById("result").value;
    var value = document.getElementById("result").value;
    var result;
    if (value.includes('+')) {
        value = value.split('+');
        document.getElementById("result").value = result = (parseInt(value[0]) + (parseInt(value[1])));
    }
    if (value.includes('-')) {
        value = value.split('-');
        document.getElementById("result").value = result = (parseInt(value[0]) - (parseInt(value[1])));
    }

    if (value.includes('*')) {
        value = value.split('*');
        document.getElementById("result").value = result = (parseInt(value[0]) * (parseInt(value[1])));
    }

    if (value.includes('/')) {
        value = value.split('/');
        document.getElementById("result").value = result =(parseInt(value[0]) / (parseInt(value[1])));
    }

    if (value.includes('%')) {
        value = value.split('%');
        document.getElementById("result").value = result =(parseInt(value[0]) % (parseInt(value[1])));
    }

    if (value.includes('[') && value.includes(']')) {
        value = value.replace("[", "");
        value = value.replace("]", "");
        value = value.split(',');
        var sum = 0;
        for (var index = 0; index < value.length; index++) {
            sum += parseInt(value[index]);
        }
        result = sum;
        document.getElementById("result").value = sum;
    }

    let history = {
        statement : state,
        resul  : result,
      };
      
      list = [history,...list];
      console.log(list);
}
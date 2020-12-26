let fs =  require('fs');
let mem = new Array();
let text = fs.readFileSync('Factorial.txt');
text = text.toString();
mem=text.split(/[\s\n\r]/);
for (i = 0; i<mem.length;i++)
	if (mem[i]=='') mem[i]=null;
mem = mem.filter(element => element !== null);
let ip=0;
let a = mem.length;
console.log(mem);

while(mem[ip]!='exit')
	switch(mem[ip]){
		case 'set'://в €чейку пам€ти с номером [ip+1] кладетс€ значение [ip+2]
			mem[mem[ip+1]+a] = parseFloat(mem[ip+2])
			ip+=3
			break
		case 'output'://вывод значени€ €чейки пам€ти с номером [ip+1]
			console.log(mem[mem[ip+1]+a])
			ip+=2
			break
		case 'add':	//сложение значений из €чеек пам€ти [ip+1] и [ip+2] в €чейку [ip+3]
			mem[mem[ip+3]+a]=mem[mem[ip+1]+a]+mem[mem[ip+2]+a]
			ip+=4
			break
		case 'goIfEqual':// сравнение из €чейки пам€ти [ip + 1] и ячейки [ip+2] 
			if (mem[mem[ip + 1] + a] == mem[mem[ip + 2] + a])
				ip = parseFloat(mem[ip + 3])
			else ip += 4
			break
		case 'goIfNonEqual':// сравнение из €чейки пам€ти [ip + 1] и ячейки [ip+2] 
			if (mem[mem[ip + 1] + a] != mem[mem[ip + 2] + a])
				ip = parseFloat(mem[ip + 3])
			else ip +=4
			break
		case 'multiply':// умножение 
			mem[mem[ip + 3] + a] = mem[mem[ip + 1] + a] * mem[mem[ip + 2] + a]
			ip += 4
			break
		//case 'toPos':
		//	ip = parseFloat(mem[ip + 1])
		//	break
	}
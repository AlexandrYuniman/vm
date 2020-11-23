let fs =  require('fs');
let mem = new Array();
let text = fs.readFileSync('1.jss');
text = text.toString();
mem=text.split(/[\s\n\r]/);
for (i = 0; i<mem.length;i++)
	if (mem[i]=='') mem[i]=null;
mem = mem.filter(element => element !== null);
let ip=0;
let a = mem.length;
while(mem[ip]!='exit')
	switch(mem[ip]){
		case 'set'://в ячейку памяти с номером [ip+1] кладется значение [ip+2]
			mem[mem[ip+1]+a] = parseFloat(mem[ip+2])
			ip+=3
			break
		case 'output'://вывод значения ячейки памяти с номером [ip+1]
			console.log(mem[mem[ip+1]+a])
			ip+=2
			break
		case 'add':	//сложение значений из ячеек памяти [ip+1] и [ip+2] в ячейку [ip+3]
			mem[mem[ip+3]+a]=mem[mem[ip+1]+a]+mem[mem[ip+2]+a]
			ip+=4
			break
		case 'factorial'://в ячейку памяти с номером [ip+1] кладется значение факториала [ip+2]
			let k = 1
			for (j = mem[ip+2]; j>0;j--)
				k *=j
			mem[mem[ip+1]+a] = k
			ip+=3
			break
		case 'NOD'://в ячейку памяти с номером [ip+1] кладется НОД чисел из ячеек [ip+2] и [ip+3]
			let nod = 1
			for (i = 1;i<Math.min(mem[ip+2],mem[ip+3]);i++){
				if ((mem[ip+2] % i == 0) && (mem[ip+3] % i == 0))
					nod = i
			}
			mem[mem[ip+1]+a] = nod
			ip+=4
			break
		case 'FibNum'://в ячейку памяти с номером [ip+1] кладется число Фибоначчи под номером [ip+2]
			let arr = [1,1];
			for (i = 2; i < mem[ip+2]; i++){
				arr[i] = arr[i-1] + arr[i-2];
			}
			mem[mem[ip+1]+a] = arr[i-1];
			ip+=3;
			break
}

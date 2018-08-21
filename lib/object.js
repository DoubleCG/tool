function objLowToHighOnProperty(objs,property,filter){
	let l = objs.length-1;
	for(let i=0;i<l;i++){
		for(let j=0,_l=l-i;j<_l;j++){
			if(typeof(filter) === 'function'){
				if(filter(objs[j][property]) > filter(objs[j+1][property])){
					let t = objs[j+1];
					objs[j+1] = objs[j];
					objs[j] = t;
				}
			}else{
				if(objs[j][property] > objs[j+1][property]){
					let t = objs[j+1];
					console.log('uuu')
					objs[j+1] = objs[j];
					objs[j] = t;
				}
			}
		}
	}

	return objs;
}

function objHighToLowOnProperty(objs,property,filter){
	let l = objs.length-1;
	for(let i=0;i<l;i++){
        for(let j=0,_l=l-i;j<_l;j++){
        	if(typeof(filter) === 'function'){
                if(filter(objs[j][property]) < filter(objs[j+1][property])){
                    let t = objs[j+1];
                    objs[j+1] = objs[j];
                    objs[j] = t;
                }
			}else{
                if(objs[j][property] < objs[j+1][property]){
                    let t = objs[j+1];
                    objs[j+1] = objs[j];
                    objs[j] = t;
                }
			}
        }
	}
	return objs;
}
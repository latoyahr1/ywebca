// Student Workspace
Chess.start = function (n) {
    var size = n || 8; 
    var chess = ""; 

    if (n==0) { 
    	return chess; 
    } 
    for ( var x = 0; x < size; x++) { 
        for (var y = 0; y < size ; y++)	{ 
        	if ((x + y ) % 2 == 0){ 
        		chess += " " ; 
        	} 
        	else { 
        		chess += "#" ; 
        	} 
        	
        }
    chess += "\n" ; 
    } 

    return chess ;


};
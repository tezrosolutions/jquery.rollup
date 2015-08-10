$.fn.rollup = function() {
           function rollupTime(elem) {
                setInterval(function() {
                    var currentVal = (parseInt(elem.html())+1);
                    
                    if(parseInt(elem.attr("val")) >= currentVal)
                        elem.html(currentVal+"%");
                        
                }, 0.1)
           }
           
            return this.each(function() {
               rollupTime($(this))
            });
 
        };
        

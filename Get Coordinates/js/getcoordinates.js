$("#get_college_loc").change(function(){

    if($("#get_college_loc").val()!=="")
        {
            var url = $("#get_college_loc").val();
            var count = 0;
            var latt = "";
            var long = "";
            for(var i=0;i<url.length;i++)
            {
                if(url.charAt(i)==="@")
                {
                    var j=i+1;
                    while(count!==2)
                    {
                        if(count===0 && url.charAt(j)!==",")
                            latt += url.charAt(j);
                        else if(count===1 && url.charAt(j)!==",")
                            long += url.charAt(j);
                        if(url.charAt(j)==",")
                            count++;
                        j++;
                    }
                    break;
                }
            }
            $("#latitude").val(latt);
            $("#longtitude").val(long);
        }
});

document.getElementById("get_college_loc").focus();
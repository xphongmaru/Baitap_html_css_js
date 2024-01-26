$(document).ready(function() {
    // flus='<i class="fa fa-plus-square" aria-hidden="true"></i>';
    // minus='<i class="fa fa-minus-square" aria-hidden="true"></i>';

    plus='<i class="fa fa-plus-square"></i>';
    minus='<i class="fa fa-minus-square"></i>';
    
    $('#pc1').show(); $('#btn_1').html(minus);
    // $('#pc1').hide();
    $('#pc2').hide();
    $('#pc3').hide();
    $('#pc4').hide();



    $('#btn_1').click(function(){
        if($('#btn_1').html() == plus)
        {
            $('#btn_1').html(minus);
        }
        else
        {
            $('#btn_1').html(plus);
        }

        $("#btn_2").html(plus);
        $("#btn_3").html(plus);
        $("#btn_4").html(plus);
        
        $('#pc1').slideToggle();
        $('#pc2').hide();
        $('#pc3').hide();
        $('#pc4').hide();

    })

    $("#btn_2").click(function(){
        if($('#btn_2').html()==plus)
        {
            $('#btn_2').html(minus);
        }
        else
        {
            $('#btn_2').html(plus);
        }

        $("#btn_1").html(plus);
        $("#btn_3").html(plus);
        $("#btn_4").html(plus);

        $('#pc2').slideToggle();
        $('#pc1').hide();
        $('#pc3').hide();
        $('#pc4').hide();
    });
    
    $("#btn_3").click(function(){
        if($('#btn_3').html()==plus)
        {
            $('#btn_3').html(minus);
        }
        else
        {
            $('#btn_3').html(plus);
        }

        $("#btn_1").html(plus);
        $("#btn_2").html(plus);
        $("#btn_4").html(plus);

        $('#pc3').slideToggle();
        $('#pc1').hide();
        $('#pc2').hide();
        $('#pc4').hide();
    });
    
    $("#btn_4").click(function(){
        if($('#btn_4').html()==plus)
        {
            $('#btn_4').html(minus);
        }
        else
        {
            $('#btn_4').html(plus);
        }

        $("#btn_1").html(plus);
        $("#btn_3").html(plus);
        $("#btn_2").html(plus);

        $('#pc4').slideToggle();
        $('#pc1').hide();
        $('#pc3').hide();
        $('#pc2').hide();
    });
});
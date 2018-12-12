<script type="text/javascript">

        $(document).ready(function(){

$("#thumbnail li a").click(function(){

$("#large img").hide().attr({"src": $(this).attr("href"), "title": $("> img", this).attr("title")});

$("#large h2").html($("> img", this).attr("title"));

return false;

});

$("#large>img").load(function(){$("#large>img:hidden").fadeIn("slow")});

});

</script>
function validate()
{
	var name=document.myform.username.value;
	
	var Password=document.myform.password.value;
	
	if(name==null || name=="")
	{
		alert('enter name first and try !!');
		return false;
	}
	
	else if(Password==null || Password=="")
	{
		alert('enter Password first and try !!');
		return false;
	}
	

}
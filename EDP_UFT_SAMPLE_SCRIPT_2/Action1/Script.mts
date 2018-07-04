InvokeApplication("C:\Users\Public\Jenkins\Application\DotNet_SampleApp\MahApps.Metro.Demo.exe")

If WpfWindow("wndDemoApplication").Exist(40) Then 
	Reporter.ReportEvent micPass,"Launching the .Net Application",".Net application launched successfully"
		
	Set oButtons=Description.Create
	oButtons("micclass").value="WpfButton"
	Set oBtnChld=WpfWindow("wndDemoApplication").ChildObjects(oButtons)
	
	For nIter= 0 To oBtnChld.count-1
		If oBtnChld(nIter).GetRoProperty("enabled") =True Then
			oBtnChld(nIter).Click
			Reporter.ReportEvent micDone, "Clicked on button","Clicked on button"
		Else
			Reporter.ReportEvent micDone, "Button is Disabled","Button is Disabled"
		End If
	Next
		
	  
	Set oCheckbox=Description.Create
	oCheckbox("micclass").value="WpfCheckBox"
	
	Set oChkBoxChld=WpfWindow("wndDemoApplication").ChildObjects(oCheckbox)
	 
	For nIter= 0 To oChkBoxChld.count-1
		If oChkBoxChld(nIter).GetRoProperty("enabled") =True Then
			oChkBoxChld(nIter).Click
			Reporter.ReportEvent micDone, "Select the Checkbox","Select the Checkbox"
		Else
			Reporter.ReportEvent micDone, "Checkbox is Disabled","Checkbox is Disabled"
		End If
	Next
	  
	Set oRadioBtn=Description.Create
	oRadioBtn("micclass").value="WpfRadioButton"
	
	Set oRadioBtnChld=WpfWindow("wndDemoApplication").WpfObject("objRadioButtons").ChildObjects(oRadioBtn)
	For nIter= 0 To oRadioBtnChld.count-1
		If oRadioBtnChld(nIter).GetRoProperty("enabled") =True Then
			oRadioBtnChld(nIter).Click
			Reporter.ReportEvent micDone, "Select the Radio button","Select the Radio button"
		Else
			Reporter.ReportEvent micDone, "Radio button is Disabled","Radio button is Disabled"
		End If
	Next

Else
	Reporter.ReportEvent micFail,"Launching the .Net Application",".Net application launched successfully"
End If

SystemUtil.CloseProcessByName "MahApps.Metro.Demo.exe"

Set oButtons=Nothing
Set oBtnChld=Nothing
Set oCheckbox=Nothing
Set oChkBoxChld=Nothing
Set oRadioBtn=Nothing
Set oRadioBtnChld=Nothing


; Script generated by the Inno Setup Script Wizard.
; SEE THE DOCUMENTATION FOR DETAILS ON CREATING INNO SETUP SCRIPT FILES!

#define MyAppName "NeuroLab"
#define MyAppVersion "0.2.0"
#define MyAppPublisher "Brandon Groff"
#define MyAppExeName "NeuroLab.exe"

[Setup]
; NOTE: The value of AppId uniquely identifies this application.
; Do not use the same AppId value in installers for other applications.
; (To generate a new GUID, click Tools | Generate GUID inside the IDE.)
AppId={{24EEA63A-133C-4890-84AB-6B5020CFE8A3}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
;AppVerName={#MyAppName} {#MyAppVersion}
AppPublisher={#MyAppPublisher}
DefaultDirName={pf}\{#MyAppName}
DisableProgramGroupPage=yes
OutputDir=C:\Users\Epic\Documents\NeuroLab
OutputBaseFilename=NeuroLab-install
SetupIconFile=C:\Users\Epic\Documents\NeuroLab\NeuroLab-goldman\app\images\icon.ico
Compression=lzma
SolidCompression=yes

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked
Name: "quicklaunchicon"; Description: "{cm:CreateQuickLaunchIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked; OnlyBelowVersion: 0,6.1

[Files]
Source: "C:\Users\Epic\Documents\NeuroLab\NeuroLab-goldman\NeuroLab-win32-x64\NeuroLab.exe"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\Epic\Documents\NeuroLab\NeuroLab-goldman\NeuroLab-win32-x64\node.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\Epic\Documents\NeuroLab\NeuroLab-goldman\NeuroLab-win32-x64\pdf.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\Epic\Documents\NeuroLab\NeuroLab-goldman\NeuroLab-win32-x64\snapshot_blob.bin"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\Epic\Documents\NeuroLab\NeuroLab-goldman\NeuroLab-win32-x64\ui_resources_200_percent.pak"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\Epic\Documents\NeuroLab\NeuroLab-goldman\NeuroLab-win32-x64\vccorlib120.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\Epic\Documents\NeuroLab\NeuroLab-goldman\NeuroLab-win32-x64\version"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\Epic\Documents\NeuroLab\NeuroLab-goldman\NeuroLab-win32-x64\xinput1_3.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\Epic\Documents\NeuroLab\NeuroLab-goldman\NeuroLab-win32-x64\content_resources_200_percent.pak"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\Epic\Documents\NeuroLab\NeuroLab-goldman\NeuroLab-win32-x64\content_shell.pak"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\Epic\Documents\NeuroLab\NeuroLab-goldman\NeuroLab-win32-x64\d3dcompiler_47.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\Epic\Documents\NeuroLab\NeuroLab-goldman\NeuroLab-win32-x64\ffmpeg.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\Epic\Documents\NeuroLab\NeuroLab-goldman\NeuroLab-win32-x64\icudtl.dat"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\Epic\Documents\NeuroLab\NeuroLab-goldman\NeuroLab-win32-x64\libEGL.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\Epic\Documents\NeuroLab\NeuroLab-goldman\NeuroLab-win32-x64\libGLESv2.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\Epic\Documents\NeuroLab\NeuroLab-goldman\NeuroLab-win32-x64\LICENSE"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\Epic\Documents\NeuroLab\NeuroLab-goldman\NeuroLab-win32-x64\LICENSES.chromium.html"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\Epic\Documents\NeuroLab\NeuroLab-goldman\NeuroLab-win32-x64\msvcp120.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\Epic\Documents\NeuroLab\NeuroLab-goldman\NeuroLab-win32-x64\msvcr120.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\Epic\Documents\NeuroLab\NeuroLab-goldman\NeuroLab-win32-x64\natives_blob.bin"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\Epic\Documents\NeuroLab\NeuroLab-goldman\NeuroLab-win32-x64\resources\*"; DestDir: "{app}\resources"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "C:\Users\Epic\Documents\NeuroLab\NeuroLab-goldman\NeuroLab-win32-x64\locales\*"; DestDir: "{app}\locales"; Flags: ignoreversion recursesubdirs createallsubdirs
; NOTE: Don't use "Flags: ignoreversion" on any shared system files

[Icons]
Name: "{commonprograms}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"
Name: "{commondesktop}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; Tasks: desktopicon
Name: "{userappdata}\Microsoft\Internet Explorer\Quick Launch\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; Tasks: quicklaunchicon

[Run]
Filename: "{app}\{#MyAppExeName}"; Description: "{cm:LaunchProgram,{#StringChange(MyAppName, '&', '&&')}}"; Flags: nowait postinstall skipifsilent


const e="Српски",t="Провери сваких {0} секунди.",o="Максимум покушаја пре него што се сервис обележи као неактиван и пошаље се обавештење.",s="Игнориши TLS/SSL грешке за HTTPS веб странице.",n="Обрните статус. Ако је сервис доступан, онда је обележен као неактиван.",a="Максимани број преусмерења да се прате. Поставите на 0 да би се искључила преусмерења.",i="Одаберите статусне кодове који се сматрају успешним одговором.",r="Поновљена лозинка се не поклапа.",c="Молим Вас поставите обавештење за масматраче да бисе активирали.",d="Претражи кључну реч у чистом html или JSON одговору са осетљивим великим и малим словима",p="Паузирај",u="Да ли сте сигурни да желите да обришете овог посматрача?",m="Да ли сте сигурни д ажелите да уклоните ово обавештење за све посматраче?",g="Cloudflare је подразумевани сервер. Можете променити сервер за расзрешавање у било ком тренутку.",l="Одаберите RR-Type који желите да посматрате",D="Да ли сте сигурни да желите да паузирате?",N="Подешавања",h="Командна табла",w="Језик",M="Изглед",S="Тема",R="Опште",L="Верзија",T="Листа",y="Додај",P="Активно",f="Неактивно",v="Нерешено",b="Непознато",U="Паузирај",C="Име",A="Статус",E="Датум и време",k="Порука",H="Настави",x="Измени",G="Уклони",B="Тренутно",I="Време рада",K="дан | дана",V="сат",z="Одговор",O="Пинг",Y="Кључна реч",F="URL",J="Hostname",Q="Порт",j="Покушаји",q="Напредно",W="Сачувај",X="Обавештења",Z="Светло",_="Тамно",$="Аутоматско",ee="Нормално",te="Доле",oe="Искључено",se="Временска зона",ne="Одлогуј се",ae="Изађи",ie="Потврди",re="Да",ce="Не",de="Корисничко име",pe="Лозинка",ue="Улогуј се",me="Е-пошта",ge="Тест",le="Време одг. (мс)",De={languageName:e,checkEverySecond:t,retriesDescription:o,ignoreTLSError:s,upsideDownModeDescription:n,maxRedirectDescription:a,acceptedStatusCodesDescription:i,passwordNotMatchMsg:r,notificationDescription:c,keywordDescription:d,pauseDashboardHome:p,deleteMonitorMsg:u,deleteNotificationMsg:m,resolverserverDescription:g,rrtypeDescription:l,pauseMonitorMsg:D,Settings:N,Dashboard:h,"New Update":"Нова верзија",Language:w,Appearance:M,Theme:S,General:R,Version:L,"Check Update On GitHub":"Проверите нову верзију на GitHub-у",List:T,Add:y,"Add New Monitor":"Додај новог посматрача","Quick Stats":"Брзе статистике",Up:P,Down:f,Pending:v,Unknown:b,Pause:U,Name:C,Status:A,DateTime:E,Message:k,"No important events":"Нема битних догађаја",Resume:H,Edit:x,Delete:G,Current:B,Uptime:I,"Cert Exp.":"Истек серт.",day:K,"-day":"-дана",hour:V,"-hour":"-сата",Response:z,Ping:O,"Monitor Type":"Тип посматрача",Keyword:Y,"Friendly Name":"Пријатељско име",URL:F,Hostname:J,Port:Q,"Heartbeat Interval":"Интервал откуцаја срца",Retries:j,Advanced:q,"Upside Down Mode":"Наопак мод","Max. Redirects":"Макс. преусмерења","Accepted Status Codes":"Прихваћени статусни кодови",Save:W,Notifications:X,"Not available, please setup.":"Није доступно, молим Вас подесите.","Setup Notification":"Постави обавештење",Light:Z,Dark:_,Auto:$,"Theme - Heartbeat Bar":"Тема - Трака откуцаја срца",Normal:ee,Bottom:te,None:oe,Timezone:se,"Search Engine Visibility":"Видљивост претраживачима","Allow indexing":"Дозволи индексирање","Discourage search engines from indexing site":"Одвраћајте претраживаче од индексирања сајта","Change Password":"Промени лозинку","Current Password":"Тренутна лозинка","New Password":"Нова лозинка","Repeat New Password":"Понови нову лозинку","Update Password":"Измени лозинку","Disable Auth":"Искључи аутентификацију","Enable Auth":"Укључи аутентификацију","disableauth.message1":"Да ли сте сигурни да желите да <strong>искључите аутентификацију</strong>?","disableauth.message2":"То је за <strong>оне који имају додату аутентификацију</strong> испред Uptime Kuma као на пример Cloudflare Access.","Please use this option carefully!":"Молим Вас користите ово са пажњом.",Logout:ne,Leave:ae,"I understand, please disable":"Разумем, молим те искључи",Confirm:ie,Yes:re,No:ce,Username:de,Password:pe,"Remember me":"Запамти ме",Login:ue,"No Monitors, please":"Без посматрача молим","add one":"додај једног","Notification Type":"Тип обавештења",Email:me,Test:ge,"Certificate Info":"Информације сертификата","Resolver Server":"Разрешивачки сервер","Resource Record Type":"Тип записа ресурса","Last Result":"Последњи резултат","Create your admin account":"Наприви администраторски налог","Repeat Password":"Поновите лозинку",respTime:le};export{y as Add,q as Advanced,M as Appearance,$ as Auto,te as Bottom,ie as Confirm,B as Current,_ as Dark,h as Dashboard,E as DateTime,G as Delete,f as Down,x as Edit,me as Email,R as General,J as Hostname,Y as Keyword,w as Language,ae as Leave,Z as Light,T as List,ue as Login,ne as Logout,k as Message,C as Name,ce as No,oe as None,ee as Normal,X as Notifications,pe as Password,U as Pause,v as Pending,O as Ping,Q as Port,z as Response,H as Resume,j as Retries,W as Save,N as Settings,A as Status,ge as Test,S as Theme,se as Timezone,F as URL,b as Unknown,P as Up,I as Uptime,de as Username,L as Version,re as Yes,i as acceptedStatusCodesDescription,t as checkEverySecond,K as day,De as default,u as deleteMonitorMsg,m as deleteNotificationMsg,V as hour,s as ignoreTLSError,d as keywordDescription,e as languageName,a as maxRedirectDescription,c as notificationDescription,r as passwordNotMatchMsg,p as pauseDashboardHome,D as pauseMonitorMsg,g as resolverserverDescription,le as respTime,o as retriesDescription,l as rrtypeDescription,n as upsideDownModeDescription};
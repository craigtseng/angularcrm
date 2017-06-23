import { InMemoryDbService } from 'angular-in-memory-web-api';
import {MenuItem} from 'primeng/primeng';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
	let DataMenu:MenuItem =[
		{
                label: '系統設定',
                items: [{
                        label: '權限設定', 
                        items: [{label: '群組資料維護', routerLink: ['/groupmaintain']},
								{label: '角色資料維護', routerLink: ['/rolemaintain']},
								{label: '帳號資料維護', routerLink: ['/accountmaintain']},
								{label: '作業權限維護', routerLink: ['/programauthorization']},
								{label: '更改密碼', routerLink: ['/changepassword']}]},
						{label: '多國語言'},
						{label: '錯誤記錄', routerLink: ['/errorlogs']}
                ]
            },
            {
                label: 'hjcrm',
                items: [{
							label: '共用作業',
							items:[
									{label: '案件情報-案件等級維護',routerLink: ['/crmcaselevel']},
									{label: '案件情報-引合原因維護',routerLink: ['/OrderReasonMaintain']},
									{label: '案件情報-受失注原因維護',routerLink: ['/caseloss']},
									{label: '案件情報-價格差異比率維護',routerLink: ['/casedifferenceprice']},
									{label: '業務履歷-客戶要求維護',routerLink: ['/businesscustrequest']},
									{label: '業務履歷-結果類別維護',routerLink: ['/businessresulttype']},
									{label: '業務履歷-問題點維護',routerLink: ['/businessproblem']},
									{label: '業務履歷-受失注要因維護',routerLink: ['/businesslostorder']},
									{label: '業務履歷-業務大分類維護',routerLink: ['/businesstasktypel']},
									{label: '業務履歷-業務中分類維護',routerLink: ['/businesstasktypem']},
									{label: '業務履歷-業務小分類維護',routerLink: ['/businesstasktypes']},
									{label: '展示會進展狀況',routerLink: ['/exhibitionworkstatus']}
						 ]
						},
						{
							label: '外勤報告作業',
							items:[
									{label: '外勤簡易客戶維護', routerLink: ['/CrmCustomerMaintainProgram']},
									{label: '案件情報維護', routerLink: ['/CrmCaseMaintainProgram']},
									{label: '業務履歷維護', routerLink: ['/CrmBusinessMaintenanceHistory']},
									{label: '行程表', routerLink: ['/CrmSchedule']},
									{label: 'Excel Import'},
									{label: '展示會資料維護', routerLink: ['/CrmExhibitionMaintain']},
									{label: '展示會報告', routerLink: ['/CrmExhibitionReport']},
									{label: '展示會匯入Excel格式'}
						 ]
						}
				]
            }, 
			{label: 'test', routerLink: ['/test'],
			command:(event) =>{console.log(DataMenu[0])}}
	];
     let DataMenutest:MenuItem =[
		{
                label: '系統設定',
                items: [{
                        label: '權限設定', 
                        items: [{label: '群組資料維護', routerLink: ['/groupmaintain']},
								{label: '角色資料維護', routerLink: ['/rolemaintain']},
								{label: '帳號資料維護', routerLink: ['/accountmaintain']},
								{label: '作業權限維護', routerLink: ['/programauthorization']},
								{label: '更改密碼', routerLink: ['/changepassword']}]},
						{label: '多國語言'},
						{label: '錯誤記錄', routerLink: ['/errorlogs']}
                ]
            },
            {
                label: 'hjcrm',
                items: [{
							label: '共用作業',
							items:[
									{label: '案件情報-案件等級維護',routerLink: ['/crmcaselevel']},
									{label: '案件情報-引合原因維護',routerLink: ['/OrderReasonMaintain']},
									{label: '案件情報-受失注原因維護',routerLink: ['/caseloss']},
									{label: '案件情報-價格差異比率維護',routerLink: ['/casedifferenceprice']},
						 ]
						},
						{
							label: '外勤報告作業',
							items:[
									{label: '外勤簡易客戶維護', routerLink: ['/CrmCustomerMaintainProgram']},
									{label: '案件情報維護', routerLink: ['/CrmCaseMaintainProgram']},
								
						 ]
						}
				]
            }, 
			{label: 'test', routerLink: ['/test'],
			command:(event) =>{console.log(DataMenutest[0])}}
	];

    let  DataCaseLeval = [
		{"pkid":"haghdjgijwieojgi","caseRank":"A"},
		{"pkid":"haghdjgijwieojgi","caseRank":"B"},
		{"pkid":"haghdjgijwieojgi","caseRank":"C"},
		{"pkid":"haghdjgijwieojgi","caseRank":"D"},
    ];
	
	 let  DataCaseLeval2 = [
		{"pkid":"haghdjgijwieojgi","caseRank":"1"},
		{"pkid":"haghdjgijwieojgi","caseRank":"2"},
		{"pkid":"haghdjgijwieojgi","caseRank":"3"},
		{"pkid":"haghdjgijwieojgi","caseRank":"4"},
    ];
	
	 let  DataCaseLeval3 = [
		{"pkid":"haghdjgijwieojgi","caseRank":"q"},
		{"pkid":"haghdjgijwieojgi","caseRank":"w"},
		{"pkid":"haghdjgijwieojgi","caseRank":"e"},
		{"pkid":"haghdjgijwieojgi","caseRank":"r"},
    ];
	
    
	
	 let  DataCaseMaintainProgram = [
	 {"id":"001","name":"哈哈機械", "startDt":"2017/02/29", "occupier":"df", "cust":"sdf", "rank":"sdf", "comingReason":"dsf", "comingContent":"dsf", "failReason":"dsf", "diffRate":"sdf", "fallContent":"sdf", "machineName":"dfs", "workingPart":"dsf", "totalAmount":"sdf", "custQueryDt":"dfs", "startTestDt":"fds", "endTestDt":"sfd", "productionDt":"dfs", "currentProgress":"fds", "question":"dsf", "support":"dsf", "solution":"sfd", "saveOccupier":"dsf",  "savedDay":"fsd", "shiftOversea":"哈哈", "overseaArea":"fsd", "shiftPerrcent":"dsf", "contribution":"dfs", "memo":"sdf"},
	 {"id":"002","name":"大大機械", "startDt":"2017/02/29", "occupier":"df", "cust":"sdf", "rank":"sdf", "comingReason":"dsf", "comingContent":"dsf", "failReason":"dsf", "diffRate":"sdf", "fallContent":"sdf", "machineName":"dfs", "workingPart":"dsf", "totalAmount":"sdf", "custQueryDt":"dfs", "startTestDt":"fds", "endTestDt":"sfd", "productionDt":"dfs", "currentProgress":"fds", "question":"dsf", "support":"dsf", "solution":"sfd", "saveOccupier":"dsf",  "savedDay":"fsd", "shiftOversea":"哈哈", "overseaArea":"fsd", "shiftPerrcent":"dsf", "contribution":"dfs", "memo":"sdf"},
	 {"id":"003","name":"中中機械", "startDt":"2017/02/29", "occupier":"df", "cust":"sdf", "rank":"sdf", "comingReason":"dsf", "comingContent":"dsf", "failReason":"dsf", "diffRate":"sdf", "fallContent":"sdf", "machineName":"dfs", "workingPart":"dsf", "totalAmount":"sdf", "custQueryDt":"dfs", "startTestDt":"fds", "endTestDt":"sfd", "productionDt":"dfs", "currentProgress":"fds", "question":"dsf", "support":"dsf", "solution":"sfd", "saveOccupier":"dsf",  "savedDay":"fsd", "shiftOversea":"哈哈", "overseaArea":"fsd", "shiftPerrcent":"dsf", "contribution":"dfs", "memo":"sdf"},
	 {"id":"004","name":"小小機械", "startDt":"2017/02/29", "occupier":"df", "cust":"sdf", "rank":"sdf", "comingReason":"dsf", "comingContent":"dsf", "failReason":"dsf", "diffRate":"sdf", "fallContent":"sdf", "machineName":"dfs", "workingPart":"dsf", "totalAmount":"sdf", "custQueryDt":"dfs", "startTestDt":"fds", "endTestDt":"sfd", "productionDt":"dfs", "currentProgress":"fds", "question":"dsf", "support":"dsf", "solution":"sfd", "saveOccupier":"dsf",  "savedDay":"fsd", "shiftOversea":"哈哈", "overseaArea":"fsd", "shiftPerrcent":"dsf", "contribution":"dfs", "memo":"sdf"}
	];
	
	let  DataBusinessMaintenanceHistory= [
		{"cust":"00001", "crm_case":"神祕事件", "taskDt":"產業機械", "startTime":"00002", "endTime":"04-22222222", "taskBigType":"04-33333333", "taskMediumType":"新規A", "taskSmallType":"代理商", "content":"現金", "resultType":"1000", "result":"1000坪", "custRequest":"2000萬", "lostOrder":"1億", "lostOrderResult":"鋼珠/金屬條", "problemsType":"機台", "problems":"小小機械", "togetherAgent":"否" },
		{"cust":"00002", "crm_case":"神祕事件", "taskDt":"產業機械", "startTime":"00002", "endTime":"04-22222222", "taskBigType":"04-33333333", "taskMediumType":"新規A", "taskSmallType":"代理商", "content":"現金", "resultType":"1000", "result":"1000坪", "custRequest":"2000萬", "lostOrder":"1億", "lostOrderResult":"鋼珠/金屬條", "problemsType":"機台", "problems":"小小機械", "togetherAgent":"否" },
		{"cust":"00003", "crm_case":"神祕事件", "taskDt":"產業機械", "startTime":"00002", "endTime":"04-22222222", "taskBigType":"04-33333333", "taskMediumType":"新規A", "taskSmallType":"代理商", "content":"現金", "resultType":"1000", "result":"1000坪", "custRequest":"2000萬", "lostOrder":"1億", "lostOrderResult":"鋼珠/金屬條", "problemsType":"機台", "problems":"小小機械", "togetherAgent":"否" },
		{"cust":"00004", "crm_case":"神祕事件", "taskDt":"產業機械", "startTime":"00002", "endTime":"04-22222222", "taskBigType":"04-33333333", "taskMediumType":"新規A", "taskSmallType":"代理商", "content":"現金", "resultType":"1000", "result":"1000坪", "custRequest":"2000萬", "lostOrder":"1億", "lostOrderResult":"鋼珠/金屬條", "problemsType":"機台", "problems":"小小機械", "togetherAgent":"否" },

    ];
	
	let  DatExhibitionMaintain = [
		{"custName":"株式会社マス商事　西日本支店", "exYear":"2016", "exhibition":"インターネプコンジャパン", "occupier":"王大銘", "postcode":"532-0004", "city":"大阪府", "address":"大阪市淀川区西宮原2-7-38　新大阪西浦ビル707号室", "memo":"", "busCategory":"", "workStatus":"", "CustKind":"", "misCustId":"", "modifier":"王曉銘", "modifierTime":"2016/01/28 14:35:17"},
		{"custName":"株式会社マス商事　西日本支店", "exYear":"2016", "exhibition":"インターネプコンジャパン", "occupier":"王大銘", "postcode":"532-0004", "city":"大阪府", "address":"大阪市淀川区西宮原2-7-38　新大阪西浦ビル707号室", "memo":"", "busCategory":"", "workStatus":"", "CustKind":"", "misCustId":"", "modifier":"王曉銘", "modifierTime":"2016/01/28 14:35:17"},
		{"custName":"株式会社マス商事　西日本支店", "exYear":"2016", "exhibition":"インターネプコンジャパン", "occupier":"王大銘", "postcode":"532-0004", "city":"大阪府", "address":"大阪市淀川区西宮原2-7-38　新大阪西浦ビル707号室", "memo":"", "busCategory":"", "workStatus":"", "CustKind":"", "misCustId":"", "modifier":"王曉銘", "modifierTime":"2016/01/28 14:35:17"},
		{"custName":"株式会社マス商事　西日本支店", "exYear":"2016", "exhibition":"インターネプコンジャパン", "occupier":"王大銘", "postcode":"532-0004", "city":"大阪府", "address":"大阪市淀川区西宮原2-7-38　新大阪西浦ビル707号室", "memo":"", "busCategory":"", "workStatus":"", "CustKind":"", "misCustId":"", "modifier":"王曉銘", "modifierTime":"2016/01/28 14:35:17"},
	
    ]; 
	
	let DateExhibitionReport = [
		{"jobCategory":"展示會報表(展示會與擔當者別-金額)", "createUserName":"王大銘", "createdTime":"2017/06/09 15:03:29"},
		{"jobCategory":"展示會報表(展示會與擔當者別-金額)", "createUserName":"王大銘", "createdTime":"2017/06/19 15:03:29"},
	    {"jobCategory":"展示會報表(展示會與擔當者別-金額)", "createUserName":"王大銘", "createdTime":"2017/06/29 15:03:29"},
		{"jobCategory":"展示會報表(展示會與擔當者別-金額)", "createUserName":"王大銘", "createdTime":"2017/06/29 15:03:29"},
	];
	
	 let DataSchedule = [
            {
				"id":"1",
                "title": "Travel in Italy",
                "start": "2017-06-01T08:00:00",
				"end": "2017-06-15",
				
            },
            {
				"id":"2",
                "title": "Travel in Germany",
                "start": "2017-06-27T06:00:00",
				"end": "2017-07-01"
            },
            {
				"id":"3",
                "title": "Visit A ​​customer",
                "start": "2017-06-03T10:00:00",
				"end": "2017-06-03"
            },
            {	
				"id":"4",
                "title": "Visit B ​​customer",
                "start": "2017-06-06T15:00:00",
				"end": "2017-06-06"
            }
        ];
	let  DataCaseLevel = 
    [
    {"pkid":"haghdjgijwieojgi","caseRank":"A"}, 
    {"pkid":"haghdjgijwieojgi","caseRank":"B"},
    {"pkid":"haghdjgijwieojgi","caseRank":"C"},
    {"pkid":"haghdjgijwieojgi","caseRank":"D"}
    ]
	let  DataCaseLevelcrud = 
    [
    {"ide":"123","idr":"123001","create":true,"read":false,"update":false,"del":false}, 
   //{"ide":"345","idr":"345001","create":false,"read":false,"update":false,"del":false},
    {"ide":"345","idr":"345002","create":true,"read":true,"update":true,"del":true},
    {"ide":"000","idr":"000","create":true,"read":false,"update":false,"del":false}
    ]
    let  Data = 
    [
    {"vin":"ee8a89d8","brand":"Fiat","year":1987, "color":"Maroon" },
    { "vin":"642b3edc","brand":"Renault","year":1968, "color":"White" },
    {"vin":"19ec7580","brand":"Renault","year":1981, "color":"Black" },
    {"vin":"39980f30", "brand":"Volkswagen", "year":1986, "color":"Red"},
    {"vin":"ec9cc4e4", "brand":"Fiat","year":1981, "color":"Brown" },
    ]
    let DataOrderReasonMaintain =
    [
        {"pkid":"001","reasonName":"web"},
        {"pkid":"002","reasonName":"other"},
        {"pkid":"003","reasonName":"商社經由"},
        {"pkid":"004","reasonName":"展示會"},
        {"pkid":"005","reasonName":"新聞"},
        {"pkid":"006","reasonName":"自己調查"},
    ]
    let Datacaseloss =
    [
        {"pkid":"001","failName":"アフターサービス力"},
        {"pkid":"001","failName":"價格"},
        {"pkid":"002","failName":"other"},
        {"pkid":"003","failName":"品質"},
        {"pkid":"004","failName":"情報入手時期"},
        {"pkid":"005","failName":"新聞"},
        {"pkid":"006","failName":"納期"},

    ]
    let Datacasedifferenceprice =
    [
        {"pkid":"001","rateName":"-10%"},
        {"pkid":"001","rateName":"-20%"},
        {"pkid":"002","rateName":"0%"},
        {"pkid":"003","rateName":"10%"},
        {"pkid":"004","rateName":"15%"},
        {"pkid":"005","rateName":"20%"},
        {"pkid":"006","rateName":"25%"},

    ]
    let Databusinesscustrequest =
    [
        {"pkid":"001","request":"其他"},
        {"pkid":"001","request":"圖面作成依賴"},
        {"pkid":"002","request":"壽命計算"},
        {"pkid":"003","request":"製品介紹"},
        {"pkid":"004","request":"試用"}
    ]
     let Databusinessresulttype =
    [
        {"pkid":"001","resulttype":"受注"},
        {"pkid":"002","resulttype":"失注"},
        {"pkid":"003","resulttype":"見積依賴"}
    ]
    let Dataproblemstype =
    [
        {"pkid":"001","problemstype":"價格"},
        {"pkid":"002","problemstype":"其他"},
        {"pkid":"003","problemstype":"品質"},
        {"pkid":"004","problemstype":"納期"}
    ]
     let Datalostorder =
    [
        {"pkid":"001","lostorder":"價格"},
        {"pkid":"002","lostorder":"其他"},
        {"pkid":"003","lostorder":"品質"},
        {"pkid":"004","lostorder":"納期"},
        {"pkid":"005","lostorder":"支持條件"},
        {"pkid":"006","lostorder":"技術情報"}
    ]
    let Datatasktypel =
    [
        {"pkid":"001","tasktype":"價格1"},
        {"pkid":"002","tasktype":"其他2"},
        {"pkid":"003","tasktype":"品質3"},
        {"pkid":"004","tasktype":"納期"},
        {"pkid":"005","tasktype":"支持條件"},
        {"pkid":"006","tasktype":"技術情報"}
    ]
    let Datatasktypem =
    [
        {"pkid":"001","tasktype1":"價格","tasktype2":"價格"},
        {"pkid":"002","tasktype1":"其他","tasktype2":"價格"},
        {"pkid":"003","tasktype1":"品質","tasktype2":"價格"},
        {"pkid":"004","tasktype1":"納期","tasktype2":"價格"},
        {"pkid":"005","tasktype1":"支持條件","tasktype2":"價格"},
        {"pkid":"006","tasktype1":"技術情報","tasktype2":"價格"}
    ]
    let Datatasktypes =
    [
        {"pkid":"001","tasktype1":"價格","tasktype2":"價格"},
        {"pkid":"002","tasktype1":"其他","tasktype2":"價格"},
        {"pkid":"003","tasktype1":"品質","tasktype2":"價格"},
        {"pkid":"004","tasktype1":"納期","tasktype2":"價格"},
        {"pkid":"005","tasktype1":"支持條件","tasktype2":"價格"},
        {"pkid":"006","tasktype1":"技術情報","tasktype2":"價格"}
    ]
    let Dataworkstatus =
    [
        {"workstatuspk":"001","status":"價格"},
        {"workstatuspk":"002","status":"價格"},
    ]
	
	let Datarolemaintain =
	[
		{"id":"001","name":"管理員角色","subid":"no"},
		{"id":"002","name":"預設角色","subid":"node"}
	]
	let Datasubrolemaintain = 
	[
		{"id":"001","subid":"no1"},
		{"id":"001","subid":"no2"},
		{"id":"001","subid":"no3"},
		{"id":"002","subid":"node1"},
		{"id":"002","subid":"node2"},
		{"id":"002","subid":"node3"}
	]
	let Datagroupmaintain =
    [
       {"id":"G_Default","name":"預設資料群組"},
       {"id":"G_ADMIN","name":"管理者資料群組"},
    ]

    let Dataaccountmaintain =
    [
        {"id":"001","name":"張大冠","userid":"123","disabled":"y","password":"123456","activeStartDate":"2017/6/13","activeEndDate":"2017/12/13","email":"abc@hiwin.com.tw","groupid":"123","groupname":"hshig","isDefault":"y","roleid":"360","rname":"asf","dname":"amgkir","issucessful":"n","loginip":"123.123.123.111","logindate":"12/12/2013"},
        {"id":"002","name":"張中冠","userid":"123456","disabled":"y","password":"123456","activeStartDate":"2016/5/13","activeEndDate":"2018/9/13","email":"abc@hiwin.com.tw","groupid":"123","groupname":"hshig","isDefault":"y","roleid":"360","rname":"asf","dname":"amgkir","issucessful":"n","loginip":"123.123.123.111","logindate":"12/12/2013"},
        {"id":"003","name":"張小冠","userid":"123456789","disabled":"n","password":"123456","activeStartDate":"2014/7/3","activeEndDate":"2016/7/13","email":"abc@hiwin.com.tw","groupid":"123","groupname":"hshig","isDefault":"y","roleid":"360","rname":"asf","dname":"amgkir","issucessful":"n","loginip":"123.123.123.111","logindate":"12/12/2013"},
    ]
    let Dataprogramauthorization =
    [
        {"id":"001","name":"價格","userid":"123","disabled":"y","password":"123456","activeStartDate":"12/12/2013","activeEndDate":"12/12/2013","email":"abc@hiwin.com.tw","groupid":"123","groupname":"hshig","isDefault":"y","roleid":"360","rname":"asf","dname":"amgkir","issucessful":"n","loginip":"123.123.123.111","logindate":"12/12/2013"},
        {"id":"002","name":"價格","userid":"123","disabled":"y","password":"123456","activeStartDate":"12/12/2013","activeEndDate":"12/12/2013","email":"abc@hiwin.com.tw","groupid":"123","groupname":"hshig","isDefault":"y","roleid":"360","rname":"asf","dname":"amgkir","issucessful":"n","loginip":"123.123.123.111","logindate":"12/12/2013"},
        {"id":"003","name":"價格","userid":"12356","disabled":"n","password":"123456","activeStartDate":"12/12/2013","activeEndDate":"12/12/2013","email":"abc@hiwin.com.tw","groupid":"123","groupname":"hshig","isDefault":"y","roleid":"360","rname":"asf","dname":"amgkir","issucessful":"n","loginip":"123.123.123.111","logindate":"12/12/2013"},
    ]
    let Dataerrorlogs =
    [
        {"id":"001","time":"20171213","content":"adgsagerjhgahnvjnruiahlgiuhepwajgie'wjrirg'jsao'djgpojeiwrjhgurh;ajnhvruieahguo;'awiogjkl;sdjgioewohg;haoig"},
        {"id":"002","time":"20171213","content":"adgsagerjhgahnvjnruiahlgiuhepwajgie'wjrirg'jsao'djgpojeiwrjhgurh;ajnhvruieahguo;'awiogjkl;sdjgioewohg;haoig"},
    ]
	
	let ReportUser = 
	[
		{"name":"王大名"},
		{"name":"王中名"},
		{"name":"王小名"}
	]
	
	let ReportJob = 
	[
		{"id":1 , "name":"展示會報表(展示會與擔當者別-金額)"},
		{"id":2 , "name":"展示會報表(展示會金額)"},
	]
	
	let Datapassword =
    [
        {"password":"123"}
    ]

	let DataAtGroup =
    [
        {"id":"001","groupId":"G_Default","groupName":"預設資料群組"},
        {"id":"002","groupId":"G_Default","groupName":"預設資料群組"},
        {"id":"002","groupId":"G_ADMIN","groupName":"管理者資料群組"},
        {"id":"003","groupId":"G_ADMIN","groupName":"管理者資料群組"},
    ]

    let DataAtRole =
    [
        {"id":"001","isDefault":"Y","groupId":"G_Default","roleId":"R_Default","groupName":"預設群組","roleName":"預設角色"},
        {"id":"002","isDefault":"Y","groupId":"G_Default","roleId":"R_Default","groupName":"預設群組","roleName":"預設角色"},
        {"id":"002","isDefault":"N","groupId":"G_ADMIN","roleId":"R_Admins","groupName":"管理者資料群組","roleName":"管理員角色"},
        {"id":"003","isDefault":"Y","groupId":"G_ADMIN","roleId":"R_Admins","groupName":"管理者資料群組","roleName":"管理員角色"},
    ]

    let DataAtLog =
    [
        {"id":"001","isSuccessful":"Y","loginIp":"10.177.25.101","loginDateTime":"2016/05/13 10:27:11"},
        {"id":"001","isSuccessful":"Y","loginIp":"10.177.25.101","loginDateTime":"2017/06/13 13:38:51"},
        {"id":"002","isSuccessful":"Y","loginIp":"10.177.25.102","loginDateTime":"2017/05/13 08:46:49"},
        {"id":"002","isSuccessful":"Y","loginIp":"10.177.25.102","loginDateTime":"2017/06/13 16:23:37"},
        {"id":"003","isSuccessful":"Y","loginIp":"10.177.25.103","loginDateTime":"2016/04/03 13:43:46"},
        {"id":"003","isSuccessful":"Y","loginIp":"10.177.25.103","loginDateTime":"2017/05/23 22:08:22"},
    ]

    let DataSubGroup = 
    [
        {"id":"G_ADMIN","subid":"G_Default"},

    ]
	
	let  DataCustomerMaintainProgram = [
		{"id":"00001", "name":"11機械", "busCategory":"產業機械", "occupier":"00002", "tel":"04-22222222", "fax":"04-33333333", "kind":"新規A", "class":"代理商", "payway":"現金", "labors":"1000", "factArea":"1000坪", "capital":"2000萬", "revenue":"1億", "mainProduct":"鋼珠/金屬條", "productionUsed":"機台", "agency":"小小機械", "isParent":"否", "parent":"哈哈哈大機械"  },
		
		{"id":"00002", "name":"22機械", "busCategory":"產業機械", "occupier":"00002", "tel":"04-22222222", "fax":"04-33333333", "kind":"新規A", "class":"代理商", "payway":"現金", "labors":"1000", "factArea":"1000坪", "capital":"2000萬", "revenue":"1億", "mainProduct":"鋼珠/金屬條", "productionUsed":"機台", "agency":"大大機械", "isParent":"否", "parent":"哈哈哈大機械"  },
		
		{"id":"00003", "name":"33機械", "busCategory":"產業機械", "occupier":"00002", "tel":"04-22222222", "fax":"04-33333333", "kind":"新規A", "class":"代理商", "payway":"現金", "labors":"1000", "factArea":"1000坪", "capital":"2000萬", "revenue":"1億", "mainProduct":"鋼珠/金屬條", "productionUsed":"機台", "agency":"中中機械", "isParent":"否", "parent":"哈哈哈大機械"  },
		
		{"id":"00004", "name":"44機械", "busCategory":"產業機械", "occupier":"00002", "tel":"04-22222222", "fax":"04-33333333", "kind":"新規A", "class":"代理商", "payway":"現金", "labors":"1000", "factArea":"1000坪", "capital":"2000萬", "revenue":"1億", "mainProduct":"鋼珠/金屬條", "productionUsed":"機台", "agency":"嗨嗨機械", "isParent":"否", "parent":"哈哈哈大機械"  },
		
		{"id":"00005", "name":"55機械", "busCategory":"產業機械", "occupier":"00002", "tel":"04-22222222", "fax":"04-33333333", "kind":"新規A", "class":"代理商", "payway":"現金", "labors":"1000", "factArea":"1000坪", "capital":"2000萬", "revenue":"1億", "mainProduct":"鋼珠/金屬條", "productionUsed":"機台", "agency":"酷酷機械", "isParent":"否", "parent":"哈哈哈大機械"  },

    ];
	
	let DataCustomerAddress= 
	[
		{"id":"00001","address1":"福島県郡山市田村町下行谷","address2":"田ノ保下1-15","isDefault":"N","postcodePkId":"963-0726"},
		{"id":"00002","address1":"東京都江東区住吉1-5-1","address2":"","isDefault":"Y","postcodePkId":"135-0002"},
		{"id":"00002","address1":"愛媛県四国中央市三島宮川1丁目10-19","address2":"","isDefault":"Y","postcodePkId":"799-0404"},
	];
	
	let DataPostCode = 
	[
		{"postCodeId":"963-0726","prefectureName":"福島県","placeName":"福島県郡山市田村町"},
		{"postCodeId":"135-0002","prefectureName":"東京都","placeName":"東京都江東区"},
		{"postCodeId":"799-0404","prefectureName":"愛媛県","placeName":"愛媛県四国中央市三島宮川"},
	];
	
	let DataCustomerPerson = 
	[
		{"id":"00001","department":"エンジニアリング事業部　技術部　第二技術課", "person":"小野　修二", "title":"", "tel":"0463-21-8129", "fax":"0463-23-6880","extension":"", "cellphone":"", "email":"" },
		{"id":"00001","department":"エンジニアリング事業部　技術部　第二技術課", "person":"工藤　敬太", "title":"", "tel":"0463-21-8129", "fax":"0463-23-6880","extension":"", "cellphone":"", "email":"" },
		
		{"id":"00002","department":"", "person":"下境田　幹夫", "title":"", "tel":"06-6494-1789", "fax":"06-6494-1790","extension":"", "cellphone":"", "email":"" },
		
		{"id":"00003","department":"", "person":"小林　洋介", "title":"", "tel":"006-6976-5331", "fax":"06-6974-4903","extension":"", "cellphone":"", "email":"" },
		
		{"id":"00004","department":"オプティカル事業部", "person":"市澤　俊介", "title":"", "tel":"03-5297-3424", "fax":"","extension":"", "cellphone":"", "email":"" },
	];
	
	
	let DataCustomerSpecs = 
	[
		//{"id":"", "productsId":"", "qty":"", "rivalAlias":""}
	];
	
	let DataCaseSpecs = 
	[
		{"id":"001", "spec":"", "productsId":"AW999", "gwSeries":"", "gwSize":"", "itemNo":"", "qty":"10", "price":"10000000"},
		{"id":"002", "spec":"standerd", "productsId":"RE0785", "gwSeries":"", "gwSize":"", "itemNo":"", "qty":"15", "price":"10000"},
		{"id":"003", "spec":"big", "productsId":"CG5546", "gwSeries":"", "gwSize":"", "itemNo":"", "qty":"20", "price":"899999"},
	];
	
	let DataCaseGwSeries = 
	[
		{"seriesId":"001", "seriesName":"AG"},
		{"seriesId":"001", "seriesName":"BH"},
		{"seriesId":"001", "seriesName":"CG"},
		{"seriesId":"001", "seriesName":"CMN"},
		{"seriesId":"001", "seriesName":"EG"},
		{"seriesId":"001", "seriesName":"HG"},
		{"seriesId":"001", "seriesName":"LG"},
		{"seriesId":"001", "seriesName":"LR"},
		{"seriesId":"001", "seriesName":"MGN"},
		{"seriesId":"001", "seriesName":"MGW"},
		{"seriesId":"001", "seriesName":"PMN"},
		{"seriesId":"001", "seriesName":"PMW"},
		{"seriesId":"001", "seriesName":"QB"},
		{"seriesId":"001", "seriesName":"QE"},
		{"seriesId":"001", "seriesName":"QH"},
		{"seriesId":"001", "seriesName":"QR"},
		{"seriesId":"001", "seriesName":"QW"},
		{"seriesId":"001", "seriesName":"RG"},
		{"seriesId":"001", "seriesName":"SG"},
		{"seriesId":"001", "seriesName":"TMN"},
		{"seriesId":"001", "seriesName":"TMW"},
		{"seriesId":"001", "seriesName":"WE"},
	];
	
	let DataUsers = 
	[
		{"username":"admin","password":"admin","lastName":"管理員","ide":123},
		{"username":"abc123","password":"abc123","lastName":"一般員工","ide":666},
		{"username":"a","password":"a","lastName":"測試員","ide":345},
		{"username":"ace","password":"ace","lastName":"boss","ide":9453},
	
	];
    let DataUserroles = 
	[

      
        {"ide":123,
        "temp":[{ idr:123001,value: 'guest'}]
		},
        {"ide":345,
        "temp":[{ idr:345001,value: 'admin'},{ idr:345002,value: 'custom' }]
		},
		{"ide":666,
        "temp":[{ idr:666001 ,value: 'admin'},{ idr:666002 ,value: 'custom' },{idr:666003, value: 'guest' }]
		},
		{"ide":9453,
         "temp":[{ idr:9453001, value:'admin'},{ idr:9453002 ,value: 'custom' },{ idr:9453003,value: 'guest'}]
		}
      /*  { ide:'345' ,value: 'admin', display: 'Administrator' },
        { ide:'123',value: 'guest', display: 'Guest' },
        { ide:'123',value: 'custom123', display: 'Custom123' }
        */
	];
	
	let ItemCaseLevel =
	[
		
	];
	
    return {
        DataCaseLevel,
        Data,
        DataOrderReasonMaintain,
        Datacaseloss,
        Datacasedifferenceprice,
        Databusinesscustrequest,
        Databusinessresulttype,
        Dataproblemstype,
        Datalostorder,
        Datatasktypel,
        Datatasktypem,
        Datatasktypes,
        Dataworkstatus,
		DataMenu,DataMenutest,
        DataCaseLeval,DataCaseLevelcrud, DataCaseLeval2, DataCaseLeval3, DataCustomerMaintainProgram,
		DataCaseMaintainProgram,
		DataBusinessMaintenanceHistory,
		DataSchedule,
		DatExhibitionMaintain,
		DateExhibitionReport,
		Datarolemaintain,
		Datasubrolemaintain,
		Datagroupmaintain,
		Dataaccountmaintain,
		Dataprogramauthorization,
		Dataerrorlogs,
		ReportJob,
		ReportUser, DataUserroles,
		Datapassword,
        DataAtGroup,
        DataAtRole,
        DataAtLog,
        DataSubGroup,
		DataCustomerAddress,
		DataPostCode,
		DataCustomerSpecs,
		DataCustomerPerson,
		DataCaseSpecs,
		DataCaseGwSeries,
		DataUsers
    };
	
    
  }
}

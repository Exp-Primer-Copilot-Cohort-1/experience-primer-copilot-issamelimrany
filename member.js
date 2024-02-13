function skillsMember(){
    return{
        restrict : "E",
        templateURL : "modules/skills/views/member.html", 
        controller : "SkillsMemberController", 
        controllerAS : "vm", 
        bindToController : true, 
    }
}
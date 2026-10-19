export const stages = ['Submitted', 'HR review', 'Shortlisted', 'Exam passed', 'Interview completed', 'Offer', 'Hired'];
export const transitions = {Submitted:{screen:'HR review'},'HR review':{shortlist:'Shortlisted',reject:'Rejected'},Shortlisted:{passExam:'Exam passed',failExam:'Rejected'},'Exam passed':{completeInterview:'Interview completed'},'Interview completed':{offer:'Offer',reject:'Rejected'},Offer:{accept:'Hired',decline:'Declined',expire:'Expired'}};
export function advance(application, action) {
    const next = transitions[application.status]?.[action];
    if (!next) throw new Error('This action is unavailable at the current stage.');
    return {...application,status:next,history:[...application.history,{status:next,at:new Date().toISOString()}]};
}
export const initialState = () => ({account:null,company:null,membership:null,applications:[],jobs:[
    {id:'j1',title:'Marketing Specialist',company:'TechSolutions',location:'New York, NY',type:'Full time',category:'Marketing',salary:'$55,000 – $75,000',visibility:'public'},
    {id:'j2',title:'Software Engineer',company:'Innovatech',location:'Remote',type:'Full time',category:'IT & Software',salary:'$85,000 – $120,000',visibility:'public'},
    {id:'j3',title:'HR Manager',company:'GlobalCorp',location:'Chicago, IL',type:'Full time',category:'Human Resources',salary:'$70,000 – $95,000',visibility:'public'},
    {id:'j4',title:'Sales Executive',company:'BrightSales',location:'Seattle, WA',type:'Full time',category:'Sales',salary:'$60,000 – $90,000',visibility:'public'}]});

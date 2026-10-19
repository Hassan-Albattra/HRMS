// Run after workflow.js and hrconnect.js in a JS runtime with the DOM stub below.
function assert(condition, message) { if (!condition) throw new Error(message); }
let application = { status: 'Submitted', history: [] };
for (const action of ['screen', 'shortlist', 'passExam', 'completeInterview', 'offer', 'accept']) application = advance(application, action);
assert(application.status === 'Hired', 'Happy path must end in Hired');
assert(application.history.length === 6, 'Every transition must be recorded');
for (const [start, action, expected] of [['HR review','reject','Rejected'],['Shortlisted','failExam','Rejected'],['Interview completed','reject','Rejected'],['Offer','decline','Declined'],['Offer','expire','Expired']]) assert(advance({status:start,history:[]}, action).status===expected, action);
let blocked=false; try { advance({status:'Submitted',history:[]}, 'accept'); } catch { blocked=true; }
assert(blocked, 'Cannot skip stages');
assert(!eligible({visibility:'private',company:'A'}), 'Private jobs hidden before approval');
state.membership={company:'A',status:'approved'};
assert(eligible({visibility:'private',company:'A'}), 'Approved employee can see private jobs');
assert(!eligible({visibility:'private',company:'B'}), 'Membership must match company');
assert(esc('<img onerror="x">').includes('&lt;'), 'User text must be escaped');
for (const hash of ['#home','#jobs','#register','#register/company','#workspace','#post','#job/j1','#review','#missing']) { location.hash=hash;render();assert(main.innerHTML.length>50, 'Render '+hash); }
state.account={name:'Test',email:'test@example.com',verified:true};
state.company={name:'Example',proof:'proof.pdf',status:'approved'};
state.applications=[{id:'test',jobId:'j1',candidate:'Test',cv:'cv.pdf',status:'Offer',history:[]}];
for (const r of ['candidate','company','admin','hr','interviewer']) { role=r;location.hash='#workspace';render();assert(main.innerHTML.includes('Your recruitment workspace'),'Workspace '+r); }
location.hash='#post';render();assert(main.innerHTML.includes('Publish job'),'Approved company can post');

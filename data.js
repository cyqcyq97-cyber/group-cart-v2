const suppliers=[{id:'fresh',name:'Fresh Valley Co.',initials:'FV',category:'Produce',days:1,reliability:98,discount:20,shipping:12},{id:'dairy',name:'Countryside Dairy',initials:'CD',category:'Dairy & eggs',days:1,reliability:96,discount:20,shipping:12},{id:'pantry',name:'Harvest Wholesale',initials:'HW',category:'Pantry',days:2,reliability:94,discount:20,shipping:12},{id:'bakery',name:'Morning Mill Bakery',initials:'MM',category:'Bakery',days:1,reliability:97,discount:20,shipping:12}];
const products=[
{id:'GC-001',name:'Organic whole milk',pack:'1 gallon · bottle',category:'Dairy & eggs',icon:'🥛',stock:12,threshold:24,cost:4,sell:6.49,demand:8,supplier:'dairy'},
{id:'GC-002',name:'Hass avocados',pack:'Each · medium',category:'Produce',icon:'🥑',stock:24,threshold:40,cost:1.5,sell:2.49,demand:8,supplier:'fresh'},
{id:'GC-003',name:'Sourdough bread',pack:'800 g · loaf',category:'Bakery',icon:'🍞',stock:8,threshold:20,cost:3,sell:5.99,demand:8,supplier:'bakery'},
{id:'GC-004',name:'Free-range eggs',pack:'12 count · carton',category:'Dairy & eggs',icon:'🥚',stock:64,threshold:24,cost:3.5,sell:5.99,demand:6,supplier:'dairy'},
{id:'GC-005',name:'Gala apples',pack:'1 lb · bag',category:'Produce',icon:'🍎',stock:120,threshold:30,cost:2,sell:3.99,demand:10,supplier:'fresh'},
{id:'GC-006',name:'Organic bananas',pack:'1 lb · bunch',category:'Produce',icon:'🍌',stock:90,threshold:30,cost:1.1,sell:1.99,demand:12,supplier:'fresh'},
{id:'GC-007',name:'Greek yogurt',pack:'500 g · tub',category:'Dairy & eggs',icon:'🥣',stock:48,threshold:20,cost:2.5,sell:4.49,demand:5,supplier:'dairy'},
{id:'GC-008',name:'Extra virgin olive oil',pack:'500 ml · bottle',category:'Pantry',icon:'🫒',stock:36,threshold:12,cost:7,sell:11.99,demand:2,supplier:'pantry'},
{id:'GC-009',name:'Basmati rice',pack:'2 lb · bag',category:'Pantry',icon:'🍚',stock:72,threshold:24,cost:3,sell:5.49,demand:4,supplier:'pantry'},
{id:'GC-010',name:'Butter croissants',pack:'4 count · pack',category:'Bakery',icon:'🥐',stock:32,threshold:16,cost:4,sell:6.99,demand:4,supplier:'bakery'},
{id:'GC-011',name:'Cherry tomatoes',pack:'1 pint · carton',category:'Produce',icon:'🍅',stock:60,threshold:24,cost:2.2,sell:3.99,demand:6,supplier:'fresh'},
{id:'GC-012',name:'Rolled oats',pack:'18 oz · bag',category:'Pantry',icon:'🌾',stock:48,threshold:18,cost:2,sell:3.99,demand:3,supplier:'pantry'}];
const orders=[{id:'GC-1042',product:'GC-005',quantity:60,type:'Group',unit:1.6,shipping:10,fee:5,status:'In transit',delivery:1},{id:'GC-1041',product:'GC-009',quantity:48,type:'Individual',unit:3,shipping:12,fee:0,status:'Processing',delivery:2},{id:'GC-1040',product:'GC-004',quantity:48,type:'Group',unit:2.8,shipping:10,fee:5,status:'Delivered',delivery:-1},{id:'GC-1039',product:'GC-010',quantity:24,type:'Individual',unit:4,shipping:12,fee:0,status:'Delivered',delivery:-2}];
const historicalUnits=[820,785,760,808,740,690,614];
const referenceDate=new Date('2026-10-12T12:00:00Z');
const money=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n);
const date=offset=>{const d=new Date(referenceDate);d.setUTCDate(d.getUTCDate()+offset);return d.toLocaleDateString('en-US',{month:'short',day:'numeric',timeZone:'UTC'});};
const product=id=>products.find(p=>p.id===id);
const supplier=id=>suppliers.find(s=>s.id===id);
const low=p=>p.stock<=p.threshold;
const coverage=p=>p.stock/p.demand;
const quote=(p,q,group)=>({unit:p.cost*(group?.8:1),quantity:q,shipping:group?10:supplier(p.supplier).shipping,fee:group?5:0,days:supplier(p.supplier).days+(group?2:0),total:Math.round((p.cost*(group?.8:1)*q+(group?15:supplier(p.supplier).shipping))*100)/100});

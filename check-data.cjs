const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
vm.runInNewContext(fs.readFileSync(__dirname+'/data.js','utf8')+`
assert.equal(new Set(products.map(p=>p.id)).size,12);
assert.equal(products.reduce((n,p)=>n+p.stock,0),614);
assert.equal(products.reduce((n,p)=>n+p.stock*p.cost,0),1615);
assert.equal(historicalUnits.at(-1),products.reduce((n,p)=>n+p.stock,0));
assert.equal(products.filter(low).length,3);
for(const p of products){assert.ok(supplier(p.supplier)); for(const q of [1,24,60,1000]){const a=quote(p,q,false),g=quote(p,q,true);assert.ok(Math.abs(a.total-(a.unit*q+a.shipping+a.fee))<.001);assert.ok(Math.abs(g.total-(g.unit*q+g.shipping+g.fee))<.001);assert.equal(g.days-a.days,2);}}
const a=quote(products[0],60,false),g=quote(products[0],60,true);assert.equal(a.total,252);assert.equal(g.total,207);assert.equal(a.total-g.total,45);
for(const o of orders){assert.ok(product(o.product));assert.ok(Number.isFinite(o.quantity*o.unit+o.shipping+o.fee));}
assert.equal(date(3),'Oct 15');
`,{assert,Intl,Date});console.log('Passed: SKU integrity, inventory totals, trend reconciliation, supplier links, quote calculations, sample savings, delivery dates.');

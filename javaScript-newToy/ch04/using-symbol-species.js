class Base {
  constructor(data) {
    this.data = data;
  }

  static get [Symbol.species]() {
    return this;
  }

  static create(data) {
    const Ctor = this || Base;
    return new Ctor(data);
  }

  clone() {
    const Ctor = this?.constructor?.[Symbol.species] || Base;
    return new Ctor(this.data);
  }
}

class Sub extends Base {}

class Sub1 extends Base {}

class Sub2 extends Base {
  static get [Symbol.species]() {
    return Base;
  }
}

class SubSub1 extends Sub {}

class SubSub2 extends Sub {
  static get [Symbol.species]() {
    return null; // this를 반환하면 SubSub2를 리턴한다. 하지만 null을 하면 Sub또는 SubSub2가 아닌 Base를 리턴한다.
  }
}

const base = Base.create('base');
console.log(base.constructor.name); // Base
const baseClone = base.clone();
console.log(baseClone.constructor.name); // Base

const sub = Sub.create('sub');
console.log(sub.constructor.name); // Sub
console.log(sub); // Sub { data: 'sub' }
const subClone = sub.clone();
console.log(subClone.constructor.name); // Sub;
console.log(subClone); // Sub { data: 'sub' }

const sub1 = Sub1.create('sub1');
console.log(sub1.constructor.name); // Sub1
console.log(sub1); // Sub1 { data : sub1 }
const sub1Clone = sub1.clone();
console.log(sub1Clone.constructor.name); // Sub1
console.log(sub1Clone); // Sub1 { data: 'sub1' }

const sub2 = Sub2.create('sub2');
console.log(sub2.constructor.name); // Sub2
console.log(sub2); // Sub2 { data: sub2 }
const sub2Clone = sub2.clone();
console.log(sub2Clone.constructor.name); // Base
console.log(sub2Clone); // Base { data: 'sub2' }

const subsub1 = SubSub1.create('subsub1');
console.log(subsub1.constructor.name); // SubSub1
console.log(subsub1); // SubSub1 { data: 'subsub1' }
const subsub1Clone = subsub1.clone();
console.log(subsub1Clone.constructor.name); // SubSub1
console.log(subsub1Clone); // SubSub1 { data: 'subsub1' }

const subsub2 = SubSub2.create('subsub2');
console.log(subsub2.constructor.name); // SubSub2
console.log(subsub2); // SubSub2 { data: 'subsub2 }
const subsub2Clone = subsub2.clone();
console.log(subsub2Clone.constructor.name); // Base
console.log(subsub2Clone); // Base { data: 'subsub2' }

// 유닛 만들기
class unit {
    constructor (name,hp) {
        this.name = name;
        this.hp = hp;
    } // 그 유닛의 이름과 hp 변수만들기
    healing(heal) {
        if (this.hp <= 0) return;
        this.hp += heal;
        if (this.hp >= 100) this.hp = 100;
    } // healing
    damaged(damage) {
        if (this.hp <= 0) return;
        this.hp -= damage;
        if (this.hp <= 0) this.hp = 0;
    } // damage
}

// 만들 유닛 꺼내기
const unit = new Unit('유닛', 100);
unit.damaged(70); // 30
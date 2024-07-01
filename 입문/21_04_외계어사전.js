function solution(spell, dic) {
	/**
	 * spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return
	 *
	 */
    let sortedSpell = spell.sort().join(''); // 문자정렬

    let found = dic.some((word)=>{ //`some` 주어진 판별 함수를 적어도 하나라도 통과하는지 테스트
        let sortWord = word.split('').sort().join(''); // 배열화 > 정렬 > 문자
        return sortedSpell === sortWord;    // 문자비교 ※알파벳을 한번씩만 사용한 단어의 존재
    });

    return found ? 1 : 2
}


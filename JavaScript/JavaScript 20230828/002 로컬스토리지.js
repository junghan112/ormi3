// < !DOCTYPE html >
//     <
//     html lang = "ko" >
//     <
//     head >
//     <
//     meta charset = "UTF-8" / >
//     <
//     meta http - equiv = "X-UA-Compatible"
// content = "IE=edge" / >
//     <
//     meta name = "viewport"
// content = "width=device-width, initial-scale=1.0" / >
//     <
//     title > 로컬스토리지 < /title> < /
//     head > <
//     body >
//     <
//     script >
// setItem(key, value) – 키-값 쌍 저장
// getItem(key) – 키에 해당하는 값 호출
// removeItem(key) – 해당 값 삭제
// clear() – 모든 데이터 삭제
// key(index) – 인덱스(index)에 해당하는 키 호출
//     // length – 저장된 항목의 개수
//     const memo = [];
// memo.push("메모1");
// memo.push("메모2");
// localStorage.setItem("메모", memo);

// const memo2 = {};
// memo2["one"] = "메모1";
// memo2["two"] = "메모2";
// // 저장하실 때 문자열로 변환해서 저장하셔야 합니다.
// localStorage.setItem("메모2", memo2);

// console.log(localStorage.getItem("메모"));
// console.log(localStorage.getItem("메모").split(","));

// localStorage.setItem("one", "하나");
// localStorage.setItem("two", "둘");
// console.log(localStorage.getItem("one"));
// console.log(localStorage.getItem("two"));

// const memo3 = {};
// memo3["one"] = "메모1";
// memo3["two"] = "메모2";
// console.log(JSON.stringify(memo3));
// // 저장하실 때 문자열로 변환해서 저장하셔야 합니다.
// localStorage.setItem("메모3", JSON.stringify(memo3));
// console.log(localStorage.getItem("메모3"));
// console.log(JSON.parse(localStorage.getItem("메모3"))); <
// /script> < /
// body > <
//     /html>
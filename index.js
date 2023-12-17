// 질문 목록
const questions = [
  {
    id: 1,
    text: "새로운 사람들과의 만남을 즐깁니까?",
    yes: "E",
    no: "I"
  },
  {
    id: 2,
    text: "실제 경험을 통해 학습하는 것을 선호하십니까?",
    yes: "S",
    no: "N"
  },
  {
    id: 3,
    text: "논리적이고 분석적으로 생각하십니까?",
    yes: "T",
    no: "F"
  },
  {
    id: 4,
    text: "계획을 세우고 조직적으로 일하십니까?",
    yes: "J",
    no: "P"
  },
  {
    id: 5,
    text: "대화에서 주로 사실과 경험을 중시하십니까?",
    yes: "S",
    no: "N"
  },
  {
    id: 6,
    text: "예술적이고 창의적인 일에 관심이 있으십니까?",
    yes: "N",
    no: "S"
  },
  {
    id: 7,
    text: "다른 사람들의 감정을 고려하여 의사소통하십니까?",
    yes: "F",
    no: "T"
  },
  {
    id: 8,
    text: "계획 없이 일하는 것을 선호하십니까?",
    yes: "P",
    no: "J"
  },
  {
    id: 9,
    text: "사람들과의 대화에서 깊이 있는 주제를 선호하십니까?",
    yes: "N",
    no: "S"
  },
  {
    id: 10,
    text: "주어진 일에 대해 미리 계획을 세우는 편입니까?",
    yes: "J",
    no: "P"
  },
  {
    id: 11,
    text: "객관적이고 논리적인 판단을 중요시하십니까?",
    yes: "T",
    no: "F"
  },
  {
    id: 12,
    text: "변화와 새로운 경험을 즐깁니까?",
    yes: "N",
    no: "S"
  }
];

// 현재 질문의 인덱스를 나타내는 변수
let currentQuestionIndex = 0;

// 사용자의 답변을 저장할 변수
const userAnswers = [];

// DOM 요소 가져오기
const questionElement = document.getElementById('question');
const questionNumberElement = document.getElementById('question-number');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

// 초기화 함수 호출
init();

// 초기화 함수 정의
function init() {
  showQuestion(); // 초기 질문 표시
  updateQuestionNumber(); // 초기 질문 번호 표시

  // "예" 버튼에 클릭 이벤트 리스너 추가
  yesButton.addEventListener('click', () => handleAnswer('yes'));

  // "아니오" 버튼에 클릭 이벤트 리스너 추가
  noButton.addEventListener('click', () => handleAnswer('no'));
}

// 다음 질문으로 이동하는 함수 정의
function moveToNextQuestion() {
  currentQuestionIndex++;
  // 모든 질문에 대한 답변을 기록한 경우 결과 페이지로 이동
  if (currentQuestionIndex === questions.length) {
    moveToResultPage();
  } else {
    showQuestion();
    updateQuestionNumber();
  }
}

// 질문 표시 함수 정의
function showQuestion() {
  questionElement.textContent = questions[currentQuestionIndex].text;
}

// 질문 번호 업데이트 함수 정의
function updateQuestionNumber() {
  questionNumberElement.textContent = `질문 ${currentQuestionIndex + 1}`;
}

// "예" 혹은 "아니오" 버튼에 대한 클릭 이벤트 핸들러
function handleAnswer(answer) {
  userAnswers.push(answer);

  // 질문이 마지막인 경우 결과 계산 및 저장 후 결과 페이지로 이동
  if (currentQuestionIndex === questions.length - 1) {
    calculateAndSaveResult();
    moveToResultPage();
  } else {
    moveToNextQuestion();
  }
}

// 결과 계산 함수 정의
function calculateAndSaveResult() {
  const result = calculateMBTIResult();
  
  // 계산된 결과를 로컬스토리지에 저장
  localStorage.setItem('mbti_result', result);
}

// MBTI 결과 계산 함수 정의
function calculateMBTIResult() {
  const counts = { E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0 };

  // 각 알파벳의 출현 횟수 계산
  userAnswers.forEach(answer => counts[answer]++);

  // 각 지표에 대해 더 많이 나온 알파벳으로 결과 생성
  const result = (
    (counts.E > counts.I ? 'E' : 'I') +
    (counts.N > counts.S ? 'N' : 'S') +
    (counts.T > counts.F ? 'T' : 'F') +
    (counts.J > counts.P ? 'J' : 'P')
  );

  return result;
}



// 결과 페이지로 이동하는 함수 정의
function moveToResultPage() {
  // 여기에 result.html로 이동하는 코드를 추가하세요.
  // 이동 방법은 필요에 따라 변경할 수 있습니다.
  window.location.href = 'result.html';
}

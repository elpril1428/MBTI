/* AI 헬피를 사용해서 코드를 작성해 보세요. */


document.addEventListener('DOMContentLoaded', function () {
    // 결과 텍스트를 가져와서 표시
    const resultTextElement = document.getElementById('mbti-result');
    const mbtiResult = localStorage.getItem('mbti_result');
    resultTextElement.textContent = mbtiResult || '결과 없음';

    // "다시 테스트하기" 버튼에 클릭 이벤트 리스너 추가
    const retryButton = document.getElementById('retry-button');
    retryButton.addEventListener('click', function () {
        // 테스트 페이지로 이동
        window.location.href = 'test.html';
    });
});

class QuizQuestion {
  const QuizQuestion(this.text, this.answers);

  final String text;
  final List<String> answers;

  List<String> getSuffledAnswer() {
    //Design Pattern: Chaining
    //final suffledList = List.of(answers).suffled;

    final suffledList = List.of(answers);
    suffledList.shuffle();
    return suffledList;
  }
}
window.onload = function () {
    import { LoremIpsum } from "lorem-ipsum";
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
          max: 9,
          min: 7
        },
        wordsPerSentence: {
          max: 16,
          min: 4
        }
      });
    var gnb = document.getElementById("genbtn");
    gnb.onclick = function () {
        var paragraphs = document.getElementById("prg-am").value;
        console.log(`${paragraphs} paragraphs to be generated`);
        if (paragraphs>0) {
            var output = lorem.GenerateParagraphs(paragraphs);
            document.getElementById(output).innerHTML = paragraphs;
        }
    };
};

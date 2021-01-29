import { translateText } from "./morse";

describe("Morse translation", () => {
  it("doesn't translate the empty string", () => {
    expect(translateText("")).toBe("");
  });

  it("translates a single word", () => {
    expect(translateText(".... . .-.. .-.. ---")).toBe("hello");
  });

  it("translates multiple words", () => {
    const helloWorld = {
      encoded: ".... . .-.. .-.. --- / .-- --- .-. .-.. -..",
      plain: "hello world"
    };
    const loremIpsum = {
      encoded:
        ".-.. --- .-. . -- / .. .--. ... ..- -- / .. ... / ... .. -- .--. .-.. -.-- / -.. ..- -- -- -.-- / - . -..- - / --- ..-. / - .... . / .--. .-. .. -. - .. -. --. / .- -. -.. / - -.-- .--. . ... . - - .. -. --. / .. -. -.. ..- ... - .-. -.-- .-.-.- / .-.. --- .-. . -- / .. .--. ... ..- -- / .... .- ... / -... . . -. / - .... . / .. -. -.. ..- ... - .-. -.-- .----. ... / ... - .- -. -.. .- .-. -.. / -.. ..- -- -- -.-- / - . -..- - / . ...- . .-. / ... .. -. -.-. . / - .... . / .---- ..... ----- ----- ... --..-- / .-- .... . -. / .- -. / ..- -. -.- -. --- .-- -. / .--. .-. .. -. - . .-. / - --- --- -.- / .- / --. .- .-.. .-.. . -.-- / --- ..-. / - -.-- .--. . / .- -. -.. / ... -.-. .-. .- -- -... .-.. . -.. / .. - / - --- / -- .- -.- . / .- / - -.-- .--. . / ... .--. . -.-. .. -- . -. / -... --- --- -.- .-.-.- / .. - / .... .- ... / ... ..- .-. ...- .. ...- . -.. / -. --- - / --- -. .-.. -.-- / ..-. .. ...- . / -.-. . -. - ..- .-. .. . ... --..-- / -... ..- - / .- .-.. ... --- / - .... . / .-.. . .- .--. / .. -. - --- / . .-.. . -.-. - .-. --- -. .. -.-. / - -.-- .--. . ... . - - .. -. --. --..-- / .-. . -- .- .. -. .. -. --. / . ... ... . -. - .. .- .-.. .-.. -.-- / ..- -. -.-. .... .- -. --. . -.. .-.-.- / .. - / .-- .- ... / .--. --- .--. ..- .-.. .- .-. .. ... . -.. / .. -. / - .... . / .---- ----. -.... ----- ... / .-- .. - .... / - .... . / .-. . .-.. . .- ... . / --- ..-. / .-.. . - .-. .- ... . - / ... .... . . - ... / -.-. --- -. - .- .. -. .. -. --. / .-.. --- .-. . -- / .. .--. ... ..- -- / .--. .- ... ... .- --. . ... --..-- / .- -. -.. / -- --- .-. . / .-. . -.-. . -. - .-.. -.-- / .-- .. - .... / -.. . ... -.- - --- .--. / .--. ..- -... .-.. .. ... .... .. -. --. / ... --- ..-. - .-- .- .-. . / .-.. .. -.- . / .- .-.. -.. ..- ... / .--. .- --. . -- .- -.- . .-. / .. -. -.-. .-.. ..- -.. .. -. --. / ...- . .-. ... .. --- -. ... / --- ..-. / .-.. --- .-. . -- / .. .--. ... ..- -- .-.-.-",
      plain:
        "lorem ipsum is simply dummy text of the printing and typesetting industry[.-.-.-] lorem ipsum has been the industry[.----.]s standard dummy text ever since the 1500s[--..--] when an unknown printer took a galley of type and scrambled it to make a type specimen book[.-.-.-] it has survived not only five centuries[--..--] but also the leap into electronic typesetting[--..--] remaining essentially unchanged[.-.-.-] it was popularised in the 1960s with the release of letraset sheets containing lorem ipsum passages[--..--] and more recently with desktop publishing software like aldus pagemaker including versions of lorem ipsum[.-.-.-]"
    };
    expect(translateText(helloWorld.encoded)).toBe(helloWorld.plain);

    expect(translateText(loremIpsum.encoded)).toBe(loremIpsum.plain);
  });

  it("marks unknown chars", () => {
    const lorem = {
      encoded:
        ".-.. --- .-. . -- / .. .--. ... ..- -- / .. ... / ... .. -- .--. .-.. -.-- / -.. ..- -- -- -.-- / - . -..- - / --- ..-. / - .... . / .--. .-. .. -. - .. -. --. / .- -. -.. / - -.-- .--. . ... . - - .. -. --. / .. -. -.. ..- ... - .-. -.-- .-.-.- / .-.. --- .-. . -- / .. .--. ... ..- -- / .... .- ... / -... . . -. / - .... . / .. -. -.. ..- ... - .-. -.-- .----. ... / ... - .- -. -.. .- .-. -.. / -.. ..- -- -- -.-- / - . -..- - / . ...- . .-. / ... .. -. -.-. . / - .... . / .---- ..... ----- ----- ... --..--",
      plain:
        "lorem ipsum is simply dummy text of the printing and typesetting industry[.-.-.-] lorem ipsum has been the industry[.----.]s standard dummy text ever since the 1500s[--..--]"
    };
    expect(translateText(lorem.encoded)).toBe(lorem.plain);
  });

  it("skips words with an error", () => {
    expect(
      translateText(".... . .-.. .-.. --- / .-- --- .-. .-.. ...... -..")
    ).toBe("hello");
  });

  it("remove words rigth before an error", () => {
    expect(
      translateText(".... . .-.. .-.. --- / ...... / .-- --- .-. .-.. -..")
    ).toBe("world");
  });
});

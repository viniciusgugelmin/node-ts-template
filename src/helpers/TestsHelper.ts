export class TestsHelper {
  getARandomMessage(): string {
    const messages = Array(10)
      .fill(0)
      .map((_, i) => `Message ${i}`);
    const randomIndex = Math.floor(Math.random() * messages.length);

    return messages[randomIndex];
  }
}

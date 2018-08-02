export class DoomsayerMessage {
  public theme: string;
  public message: string;
  public archived = false;
  public isActive = false;

  constructor({ theme, message }) {
    this.theme = theme;
    this.message = message;
    this.animate();
  }

  animate() {
    setTimeout(() => {
      this.isActive = true;
    }, 0);
    setTimeout(() => {
      this.isActive = false;
    }, 3200);
    setTimeout(() => {
      this.archived = true;
    }, 3300);
  }
}

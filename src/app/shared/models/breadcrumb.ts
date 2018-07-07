export class Breadcrumb {
  public icon: string;
  public name: string;
  public link: string;

  public constructor(name: string, icon: string, link: string) {
    this.name = name;
    this.icon = icon;
    this.link = link;
  }

}

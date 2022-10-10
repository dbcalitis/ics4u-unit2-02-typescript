/**
 * MrCoxallStack Class
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-10-03
 */

class MrCoxallStack {
  private readonly stack: number[] = []

  # getter
  getStack(): number[] {
    return this.stack
  }

  # pushItem - Adds a new item in stack array.
  pushItem(pushedNumber: number): void {
    this.stack.push(pushedNumber)
  }

  # popItem - Returns and removes the last item from the stack array.
  popItem(): number | undefined {
    return this.stack.pop()
  }
}

export = MrCoxallStack

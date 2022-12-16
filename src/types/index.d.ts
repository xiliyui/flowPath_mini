declare namespace Common {
  type Response<T> = {
    statusCode: number,
    data: T,
    [name: string]: any
  }
}
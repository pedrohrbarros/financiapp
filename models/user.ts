export interface User {
    public_id: string
    name: string
    email: string
    readonly password: string
    readonly updated_at: Date
    readonly created_at: Date
}
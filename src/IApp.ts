import { Component } from "vue"

export interface ElementInterface {
    _id?: String
    id: String
    name: String
    title?: String
    icon: String
    settings: String
    style: String
    componentContentView?: Component
    componentColRight?: Component
}
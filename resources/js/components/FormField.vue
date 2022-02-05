<template>
    <default-field :field="field" :errors="errors" :show-help-text="showHelpText">
        <template slot="field">
            <!--
            <input
                :id="field.name"
                type="text"
                class="w-full form-control form-input form-input-bordered"
                :class="errorClasses"
                :placeholder="field.name"
                v-model="value"
            />
            -->

            <div class="page-builder-container">
                <div class="row">
                    <span class="helper-text">
                        <span>4|8 row</span>
                        <span>-</span>
                        <span>
                            <a class="cursor-pointer text-primary font-bold">Edit row</a>
                        </span>
                    </span>

                    <div class="flex flex-row">
                        <div class="column mr-3 w-4/12 flex items-center justify-center">
                            <span class="helper-text"></span>
                            <div class="bg-gray-100 rounded-md shadow-md w-full p-3 mb-3">
                                <button
                                    class="btn btn-default btn-primary inline-flex items-center relative h-auto leading-snug mr-3">
                                    Add column
                                </button>
                                <button
                                    class="btn btn-default btn-primary inline-flex items-center relative h-auto leading-snug mr-3">
                                    Edit settings
                                </button>
                            </div>
                        </div>

                        <div class="column mr-3 w-8/12 flex items-center justify-center">
                            <span class="helper-text"></span>
                            <div class="bg-gray-100 rounded-md shadow-md w-full p-3 mb-3">
                                <button
                                    class="btn btn-default btn-primary inline-flex items-center relative h-auto leading-snug mr-3">
                                    Add column
                                </button>
                                <button
                                    class="btn btn-default btn-primary inline-flex items-center relative h-auto leading-snug mr-3">
                                    Edit settings
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <span class="helper-text">
                        <span>6|6 row</span>
                        <span>-</span>
                        <span>
                            <a class="cursor-pointer text-primary font-bold">Edit row</a>
                        </span>
                    </span>

                    <div class="flex flex-row">
                        <div class="column mr-3 w-6/12 flex items-center justify-center">
                            <span class="helper-text"></span>
                            <div class="bg-gray-100 rounded-md shadow-md w-full p-3 mb-3">
                                <button
                                    class="btn btn-default btn-primary inline-flex items-center relative h-auto leading-snug mr-3">
                                    Add column
                                </button>
                                <button
                                    class="btn btn-default btn-primary inline-flex items-center relative h-auto leading-snug mr-3">
                                    Edit settings
                                </button>
                            </div>
                        </div>

                        <div class="column mr-3 w-6/12 flex items-center justify-center">
                            <span class="helper-text"></span>
                            <div class="bg-gray-100 rounded-md shadow-md w-full p-3 mb-3">
                                <button
                                    class="btn btn-default btn-primary inline-flex items-center relative h-auto leading-snug mr-3">
                                    Add column
                                </button>
                                <button
                                    class="btn btn-default btn-primary inline-flex items-center relative h-auto leading-snug mr-3">
                                    Edit settings
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-3">
                    <button class="btn btn-default btn-primary inline-flex items-center relative mr-3">Add row</button>
                </div>
            </div>
        </template>
    </default-field>
</template>

<script>
import {FormField, HandlesValidationErrors} from 'laravel-nova'

export default {
    mixins: [FormField, HandlesValidationErrors],

    props: ['resourceName', 'resourceId', 'field'],

    methods: {
        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
            this.value = this.field.value || ''
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
            formData.append(this.field.attribute, this.value || '')
        },
    },
}
</script>

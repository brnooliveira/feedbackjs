import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"


const submitFeedback = new SubmitFeedbackUseCase(
    {create: async () => {}} ,
    {sendMail: async ()=>{}}
)
describe('Submit feedback', () => {
    it('should be able to submit a feedback', async ()=>{
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment:  'example of bug',
            screenshot: 'test.jpg'
        })).resolves.not.toThrow()
    })
    it('should be able to submit a feedback without type', async ()=>{
        await expect(submitFeedback.execute({
            type: '',
            comment:  'example of bug',
            screenshot: 'test.jpg'
        })).rejects.toThrow()
    })

    it('should be able to submit a feedback without comment', async ()=>{
        await expect(submitFeedback.execute({
            type: 'bug',
            comment:  '',
            screenshot: 'test.jpg'
        })).rejects.toThrow()
    })
    
})
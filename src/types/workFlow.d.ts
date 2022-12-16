declare namespace WorkFlow {
  type ListParams = {
    userId: string
    workflowId: string
  }

  type ListRes = {
    availability: string
    createTime: string
    description: string
    displayName: string
    name: string
    state: string
    steps: Step[]
    updateTime: string
  }

  type Step = {
    displayName: string
    description: string
  }

  type Execution = {
    name: string
    displayName: string
    workflow: string
    startTime: string
    endTime: string
    state?: 'ACTIVE' | 'SUCCEEDED' | 'FAILED' | 'CANCELLED'
    events: {
      type: 'NORMAL' | 'FAILED' | 'WARNIING'
    }
  }
}
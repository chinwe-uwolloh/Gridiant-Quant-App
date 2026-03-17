from app.tasks.celery_app import celery_app


@celery_app.task(name='app.tasks.optimization_tasks.run_optimization')
def run_optimization(home_id: str) -> dict:
    return {'home_id': home_id, 'status': 'queued'}

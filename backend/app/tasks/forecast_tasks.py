from app.tasks.celery_app import celery_app


@celery_app.task(name='app.tasks.forecast_tasks.generate_forecast')
def generate_forecast(site_id: str) -> dict:
    return {'site_id': site_id, 'status': 'queued'}
